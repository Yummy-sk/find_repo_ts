import { Suspense, useState } from 'react';
import { Input, ListContainer } from 'components';

function App() {
  const [value, setValue] = useState<string>('hello');
  
  const onChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setValue(value)
  
  return (
    <div className="b-8 w-full h-screen flex flex-col items-center">
      <Input value={value} onChange={onChange} />
      <Suspense fallback={<h2>loading repositories...</h2>}>
        {value && <ListContainer value={value} />}
      </Suspense>
    </div>
  );
}

export default App;
