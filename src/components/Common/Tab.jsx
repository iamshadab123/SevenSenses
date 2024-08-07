export default function Tab({ tabData, field, setField }) {
  return (
    <div
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="my-6 flex max-w-max gap-x-1 rounded-full bg-[#fbe0c3]  p-1"
    >
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`${
            field === tab.type
              ? "bg-white text-[#344648]"
              : "bg-transparent text-[#344648]"
          } rounded-full px-5 py-2 transition-all duration-200`}
        >
          {tab?.tabName}
        </button>
      ))}
    </div>
  )
}
