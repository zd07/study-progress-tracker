import React, { useState, useEffect } from "react";

const GoalTracker = () => {
  const [goals, setGoals] = useState([]);
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goalProgressData, setGoalProgressData] = useState(null);

  useEffect(() => {
    // Load goals data from local storage on component mount
    const savedGoals = localStorage.getItem("studyGoals");
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  }, []);

  useEffect(() => {
    // Calculate goal progress data when goals change
    if (goals.length > 0) {
      const progressData = {
        labels: goals.map((goal) => goal.subject),
        datasets: [
          {
            label: "Progress",
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(54, 162, 235, 0.8)",
            hoverBorderColor: "rgba(54, 162, 235, 1)",
            data: goals.map(
              (goal) =>
                ((goal.duration - goal.remainingTime) / goal.duration) * 100
            ),
          },
        ],
      };
      setGoalProgressData(progressData);
    }
  }, [goals]);

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSetGoal = () => {
    const newGoal = {
      id: Date.now(),
      subject,
      topic,
      duration: parseInt(duration),
      remainingTime: parseInt(duration),
    };
    setGoals([...goals, newGoal]);
    setIsModalOpen(false);
    setSubject("");
    setTopic("");
    setDuration("");
    localStorage.setItem("studyGoals", JSON.stringify([...goals, newGoal]));
  };

  const handleDeleteGoal = (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
    localStorage.setItem("studyGoals", JSON.stringify(updatedGoals));
  };

  return (
    <div className="container mx-auto px-5 py-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Study Goal Tracker</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded shadow mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Set Goal
      </button>
      <div className="flex flex-wrap">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-gray-100 rounded-lg p-6 m-4">
            <p>
              <strong>Subject:</strong> {goal.subject}
            </p>
            <p>
              <strong>Topic:</strong> {goal.topic}
            </p>
            <p>
              <strong>Duration:</strong> {goal.duration} minutes
            </p>
            <p>
              <strong>Remaining Time:</strong> {goal.remainingTime} minutes
            </p>
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center py-0.5 rounded-full"
                style={{
                  width: `${((goal.duration - goal.remainingTime) / goal.duration) * 100}%`,
                }}
              >
                {(((goal.duration - goal.remainingTime) / goal.duration) * 100).toFixed(2)}%
              </div>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded shadow mt-4"
              onClick={() => handleDeleteGoal(goal.id)}
            >
              Delete Goal
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Set Study Goal</h2>
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-1">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                className="border border-gray-300 px-2 py-1 rounded mb-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="topic" className="block mb-1">
                Topic:
              </label>
              <input
                type="text"
                id="topic"
                value={topic}
                onChange={handleTopicChange}
                className="border border-gray-300 px-2 py-1 rounded mb-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="goalDuration" className="block mb-1">
                Duration (in minutes):
              </label>
              <input
                type="number"
                id="goalDuration"
                value={duration}
                onChange={handleDurationChange}
                className="border border-gray-300 px-2 py-1 rounded mb-2 w-full"
              />
            </div>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded shadow"
                onClick={handleSetGoal}
              >
                Set Goal
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded shadow"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalTracker;
