export default function Button({ children }: { children: string }) {
  return (
    <button className="bg-secondary shadow-xl shadow-green-300 text-white rounded px-5 py-2">
      {children}
    </button>
  )
}
