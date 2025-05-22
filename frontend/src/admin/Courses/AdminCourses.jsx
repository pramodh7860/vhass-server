import React, { useState } from "react";
import Layout from "../Utils/Layout";
import { useNavigate } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import "./admincourses.css";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";

const categories = [
  "Cyber Security",
  "EntrepreneurShip",
];

const AdminCourses = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.mainrole !== "admin") return navigate("/");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [whoShouldAttend, setWhoShouldAttend] = useState([""]);
  const [prerequisites, setPrerequisites] = useState([""]);
  const [highlights, setHighlights] = useState([""]);
  const [modules, setModules] = useState([{ title: "", content: "" }]);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (max 1MB)
    const maxSize = 1 * 1024 * 1024; // 1MB in bytes
    if (file.size > maxSize) {
      toast.error("Image size should be less than 1MB");
      e.target.value = null;
      return;
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Please upload a valid image file (JPEG, PNG, JPG)");
      e.target.value = null;
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // Resize image before setting
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to JPEG with 0.7 quality
        const resizedImage = canvas.toDataURL('image/jpeg', 0.7);
        setImagePrev(resizedImage);
        setImage(resizedImage);
      };
    };
  };

  const { courses, fetchCourses } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    // Validate form data before sending
    if (!title || !description || !category || !originalPrice || !discountedPrice || !duration || !createdBy || !image) {
      toast.error("Please fill in all required fields");
      setBtnLoading(false);
      return;
    }

    // Validate that discounted price is less than original price
    if (Number(discountedPrice) >= Number(originalPrice)) {
      toast.error("Discounted price must be less than original price");
      setBtnLoading(false);
      return;
    }

    try {
      const courseData = {
        title,
        description,
        category,
        originalPrice: Number(originalPrice),
        discountedPrice: Number(discountedPrice),
        duration: Number(duration),
        createdBy,
        poster: image,
        syllabus: modules.map(mod => `${mod.title}: ${mod.content}`),
        whoShouldAttend: whoShouldAttend.filter(item => item.trim()),
        prerequisites: prerequisites.filter(item => item.trim())
      };

      console.log('Course data being sent:', {
        ...courseData,
        poster: 'base64 image data...' // Don't log the actual image data
      });
      console.log('Server URL:', `${server}/api/admin/course/new`);
      
      const { data } = await axios.post(`${server}/api/admin/course/new`, courseData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        }
      });

      console.log('Course creation response:', data);
      
      if (data.success) {
        toast.success(data.message);
        await fetchCourses();
        // Reset form
        setImage("");
        setTitle("");
        setDescription("");
        setDuration("");
        setImagePrev("");
        setCreatedBy("");
        setOriginalPrice("");
        setDiscountedPrice("");
        setCategory("");
        setWhoShouldAttend([""]);
        setPrerequisites([""]);
        setHighlights([""]);
        setModules([{ title: "", content: "" }]);
      } else {
        throw new Error(data.message || 'Failed to create course');
      }
    } catch (error) {
      console.error('Course creation error:', error);
      console.error('Error details:', {
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
        config: error.config
      });
      
      let errorMessage = 'Failed to create course';
      
      if (error.response?.data) {
        const { message, error: errorDetails } = error.response.data;
        if (Array.isArray(errorDetails)) {
          errorMessage = errorDetails.join(', ');
        } else if (message) {
          errorMessage = message;
        }
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      console.error('Detailed error message:', errorMessage);
      toast.error(errorMessage);
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <Layout>
      <div className="admin-courses">
        <div className="left">
          <h1>All Courses</h1>
          <div className="dashboard-content">
            {courses && courses.length > 0 ? (
              courses.map((e) => {
                console.log('Course price data:', e.originalPrice, e.discountedPrice, e);
                return <CourseCard key={e._id} course={e} />;
              })
            ) : (
              <p>No Courses Yet</p>
            )}
          </div>
        </div>

        <div className="right">
          <div className="add-course">
            <div className="course-form">
              <h2>Add Course</h2>
              <form onSubmit={submitHandler}>
                <label htmlFor="text">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <label htmlFor="text">Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />

                <label htmlFor="text">Original Price</label>
                <input
                  type="number"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  required
                  placeholder="Original Price"
                  style={{ marginRight: 8, width: '45%' }}
                />
                <label htmlFor="text" style={{ marginLeft: 8 }}>Discounted Price</label>
                <input
                  type="number"
                  value={discountedPrice}
                  onChange={(e) => setDiscountedPrice(e.target.value)}
                  required
                  placeholder="Discounted Price"
                  style={{ width: '45%' }}
                />

                <label htmlFor="text">createdBy</label>
                <input
                  type="text"
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                  required
                />

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value={""}>Select Category</option>
                  {categories.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>

                <label htmlFor="text">Duration</label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />

                <input type="file" required onChange={changeImageHandler} />
                {imagePrev && typeof imagePrev === "string" && imagePrev.trim() !== "" && (
                  <img src={imagePrev} alt="Preview" width={300} />
                )}

                <label>Highlights</label>
                {highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', marginBottom: 4 }}>
                    <input
                      type="text"
                      value={item}
                      onChange={e => {
                        const newHighlights = [...highlights];
                        newHighlights[idx] = e.target.value;
                        setHighlights(newHighlights);
                      }}
                      required
                    />
                    <button type="button" onClick={() => setHighlights(highlights.filter((_, i) => i !== idx))} disabled={highlights.length === 1}>-</button>
                    <button type="button" onClick={() => setHighlights([...highlights, ""])}>+</button>
                  </div>
                ))}

                <label>Syllabus Modules</label>
                {modules.map((mod, idx) => (
                  <div key={idx} style={{ marginBottom: 8, border: '1px solid #ccc', padding: 8, borderRadius: 4 }}>
                    <input
                      type="text"
                      placeholder="Module Title"
                      value={mod.title}
                      onChange={e => {
                        const newModules = [...modules];
                        newModules[idx].title = e.target.value;
                        setModules(newModules);
                      }}
                      required
                      style={{ marginBottom: 4, width: '100%' }}
                    />
                    <textarea
                      placeholder="Module Content"
                      value={mod.content}
                      onChange={e => {
                        const newModules = [...modules];
                        newModules[idx].content = e.target.value;
                        setModules(newModules);
                      }}
                      required
                      style={{ width: '100%' }}
                    />
                    <button type="button" onClick={() => setModules(modules.filter((_, i) => i !== idx))} disabled={modules.length === 1}>-</button>
                    <button type="button" onClick={() => setModules([...modules, { title: "", content: "" }])}>+</button>
                  </div>
                ))}

                <label>Who Should Attend</label>
                {whoShouldAttend.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', marginBottom: 4 }}>
                    <input
                      type="text"
                      value={item}
                      onChange={e => {
                        const newList = [...whoShouldAttend];
                        newList[idx] = e.target.value;
                        setWhoShouldAttend(newList);
                      }}
                      required
                    />
                    <button type="button" onClick={() => setWhoShouldAttend(whoShouldAttend.filter((_, i) => i !== idx))} disabled={whoShouldAttend.length === 1}>-</button>
                    <button type="button" onClick={() => setWhoShouldAttend([...whoShouldAttend, ""])}>+</button>
                  </div>
                ))}

                <label>Prerequisites</label>
                {prerequisites.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', marginBottom: 4 }}>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const newList = [...prerequisites];
                        newList[idx] = e.target.value;
                        setPrerequisites(newList);
                      }}
                      required
                    />
                    <button type="button" onClick={() => setPrerequisites(prerequisites.filter((_, i) => i !== idx))} disabled={prerequisites.length === 1}>-</button>
                    <button type="button" onClick={() => setPrerequisites([...prerequisites, ""])}>+</button>
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={btnLoading}
                  className="common-btn"
                >
                  {btnLoading ? "Please Wait..." : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminCourses;
