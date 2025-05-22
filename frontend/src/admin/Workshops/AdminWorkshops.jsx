import React, { useState } from "react";
import Layout from "../Utils/Layout";
import { useNavigate } from "react-router-dom";
import { WorkshopData } from "../../context/WorkshopContext";
import WorkshopCard from "../../components/workshopcard/WorkshopCard";
import "./adminworkshops.css";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";

const categories = [
  "Cyber Security",
  "EntrepreneurShip",
];

const AdminWorkshops = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [syllabus, setSyllabus] = useState([""]);
  const [whoShouldAttend, setWhoShouldAttend] = useState([""]);
  const [prerequisites, setPrerequisites] = useState([""]);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const { workshops, fetchWorkshops } = WorkshopData();

  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    if (!image) {
      toast.error("Please select an image file");
      setBtnLoading(false);
      return;
    }

    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("price", Number(price));
    myForm.append("createdBy", createdBy);
    myForm.append("duration", duration);
    myForm.append("date", date);
    myForm.append("time", time);
    myForm.append("location", location);
    myForm.append("poster", image);
    syllabus.forEach((item) => myForm.append("syllabus", item));
    whoShouldAttend.forEach((item) => myForm.append("whoShouldAttend", item));
    prerequisites.forEach((item) => myForm.append("prerequisites", item));

    try {
      console.log("Sending workshop data:", {
        title,
        description,
        category,
        price,
        createdBy,
        duration,
        date,
        time,
        location,
        syllabus,
        whoShouldAttend,
        prerequisites
      });

      const { data } = await axios.post(`${server}/api/workshop/new`, myForm, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      toast.success(data.message);
      setBtnLoading(false);
      await fetchWorkshops();
      setImage("");
      setTitle("");
      setDescription("");
      setDuration("");
      setImagePrev("");
      setCreatedBy("");
      setPrice("");
      setCategory("");
      setDate("");
      setTime("");
      setLocation("");
      setSyllabus([""]);
      setWhoShouldAttend([""]);
      setPrerequisites([""]);
    } catch (error) {
      setBtnLoading(false);
      console.error("Full workshop creation error:", {
        errorObject: error,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers
      });
      
      if (error.response) {
        toast.error(error.response.data.message || "Server error occurred");
      } else if (error.request) {
        toast.error("No response from server. Please check your connection.");
      } else {
        toast.error("Error setting up request: " + error.message);
      }
    }
  };

  return (
    <Layout>
      <div className="admin-workshops">
        <div className="left">
          <h1>All Workshops</h1>
          <div className="dashboard-content">
            {workshops && workshops.length > 0 ? (
              workshops.map((e) => {
                return <WorkshopCard key={e._id} workshop={e} />;
              })
            ) : (
              <p>No Workshops Yet</p>
            )}
          </div>
        </div>

        <div className="right">
          <div className="add-workshop">
            <div className="workshop-form">
              <h2>Add Workshop</h2>
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

                <label htmlFor="text">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />

                <label htmlFor="text">Created By</label>
                <input
                  type="text"
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                  required
                />

                <label htmlFor="text">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />

                <label htmlFor="text">Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />

                <label htmlFor="text">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>

                <label htmlFor="text">Duration (hours)</label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />

                <input type="file" required onChange={changeImageHandler} />
                {imagePrev && <img src={imagePrev} alt="" width={300} />}

                <label>Syllabus / Modules</label>
                {syllabus.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', marginBottom: 4 }}>
                    <input
                      type="text"
                      value={item}
                      onChange={e => {
                        const newSyllabus = [...syllabus];
                        newSyllabus[idx] = e.target.value;
                        setSyllabus(newSyllabus);
                      }}
                      required
                    />
                    <button type="button" onClick={() => setSyllabus(syllabus.filter((_, i) => i !== idx))} disabled={syllabus.length === 1}>-</button>
                    <button type="button" onClick={() => setSyllabus([...syllabus, ""])}>+</button>
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
                      onChange={e => {
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

export default AdminWorkshops; 