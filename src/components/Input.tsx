interface Props {
	value: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ value, onChange }: Props) {

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

	return (
		<form className="w-fit mt-5" onSubmit={onSubmit}>
			<label htmlFor="large-input" className="block mb-3 text-lg text-center">Let's find repository</label>
			<input type="text" id="large-input" value={value} onChange={onChange} placeholder="Input repository name" className="block w-96 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
		</form>
	)
}
