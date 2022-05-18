function Category({icon, title, desc }) {
  return (
    <div className="ml-10 hover:border-2">
 
      <div className="flex flex-col h-64 w-60 rounded-xl items-center">
        <div className="my-6">
          {icon}
          <div className="h-10 w-10 bg-orange-500 rounded"></div>
        </div>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-center">{desc}</p>
      </div>
    </div>
  );
}

export default Category;
