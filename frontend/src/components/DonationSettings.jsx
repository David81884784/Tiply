import { useState } from 'react';

export default function DonationSettings({ onGoalsChange }) {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');

  const addGoal = () => {
    if (newGoal.trim() === '') return;
    const updated = [...goals, newGoal.trim()];
    setGoals(updated);
    onGoalsChange(updated); // Trimite lista către părinte
    setNewGoal('');
  };

  const removeGoal = (index) => {
    const updated = goals.filter((_, i) => i !== index);
    setGoals(updated);
    onGoalsChange(updated);
  };

  return (
    <div className="bg- p-4 rounded shadow-md">
      <h2 className="text-lg  text-black font-bold mb-2">🎯 Setează scopuri pentru donații</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Ex: calculator, bicicletă"
          className="flex-1 text-black border p-2 rounded"
        />
        <button onClick={addGoal} className="bg-blue-500 text-white px-4 py-2 rounded">
          Adaugă
        </button>
      </div>
      <ul className="list-disc pl-6">
        {goals.map((goal, index) => (
          <li key={index} className="flex justify-between items-center mb-1">
            {goal}
            <button
              onClick={() => removeGoal(index)}
              className="text-red-500 text-sm ml-4"
            >
              Șterge
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
