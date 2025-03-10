import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Default = () => (
  <div className="p-6 bg-gradient-to-r from-blue-100 to-pink-100 min-h-screen flex justify-center items-center">
    <Select />
  </div>
);
