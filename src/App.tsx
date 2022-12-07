import { useState } from 'react';
import { Input } from 'components';

function App() {
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const { value } = e.target;
    
    setValue(value);
  }
  
  return (
    <div className="w-full h-screen flex justify-center">
      <Input value={value} onChange={onChange} />
    </div>
  );
}

export default App;
