"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = () => {
  const router = useRouter();

  // const [title, setTitle]=useState("");
  // const [description, setDescription] = useState("");
  // const [title, setTitle]=useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Couldn't create a new Ticket");
    }
    //*Upon Success
    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: " ",
    description: " ",
    priority: 1,
    progress: 0,
    status: "Not Started",
    category: "Software Glitch",
  };
  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          // value={formData.title}
        />
        {/* TODO change to rich text area */}
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="10"
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Software Glitch">Software Glitch</option>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Update">Software Update</option>
          <option value="Program Installation">Program Installation</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          onChange={handleChange}
          value={formData.progress}
          min="0"
          max="100"
        />
        <label>Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="Done">Done</option>
        </select>
        <input type="submit" value="Create Ticket" className="btn max-w-xs" />
      </form>
    </div>
  );
};

export default TicketForm;
