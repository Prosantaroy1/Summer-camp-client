import useClass from "../../../Castom Hook/useClass";
import ClassCard from "../../ClassCard/ClassCard";

const PopularClass = () => {
    ///
    const [classes] = useClass();
    //const popularClass = classes.filter(item => item.category === 'popular')
    return (
        <div>
            <h2 className='text-center text-3xl underline  font-extrabold mt-5 mb-4'>
              Our  Popular Classes
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 px-10">
               {
                 classes.map(item => <ClassCard
                    key={item._id}
                    item={item}
                 ></ClassCard>)
               }
            </div>
        </div>
    );
};

export default PopularClass;