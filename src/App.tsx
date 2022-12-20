import { Suspense, useState } from 'react';
import { Input, List } from 'components';

function App() {
  const [value, setValue] = useState<string>('hello');
  
  const onChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setValue(value)
  
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Input value={value} onChange={onChange} />
      <Suspense fallback={<h2>loading repositories...</h2>}>
        {value && <List value={value} />}
      </Suspense>
    </div>
  );
}

export default App;
