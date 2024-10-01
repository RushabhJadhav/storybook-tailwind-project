import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="My Storybook App" subtitle="Building components with React and Tailwind CSS" />
      <main className="p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
          <div className="flex space-x-4">
            <Button label="Primary" backgroundColor="blue" />
            <Button label="Secondary" backgroundColor="gray" />
            <Button label="Success" backgroundColor="green" />
            <Button label="Danger" backgroundColor="red" />
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
          <Input label="Name" placeholder="Enter your name" />
          <Input label="Email" placeholder="Enter your email" type="email" />
          <Input label="Password" placeholder="Enter your password" type="password" />
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cards</h2>
          <div className="flex space-x-4">
            <Card
              title="Card One"
              content="This is the first card."
              image="https://via.placeholder.com/300x150"
              footer={<Button label="Learn More" backgroundColor="blue" />}
            />
            <Card
              title="Card Two"
              content="This is the second card without an image."
              footer={<Button label="Read More" backgroundColor="gray" />}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
