import { NextPage, InferGetStaticPropsType } from 'next';
import supabase from "../../supabase/supabase";

export const getStaticProps = async ()  => {
    const props = await supabase()
        .from('dishes')
        .select(`id, name`)
        .then(({ data, error }) => {
          if (error) {
            throw error;
          }
          if (data) {
            return {props: {dishes: [...data]}};
          }
        });
        return props;
  }

  const Explore : NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({dishes}) => {
    return <ul>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      {dishes.map((dish) => {
        return <li key={dish.id}>{dish.name}</li>
      })}
      </div>
    </ul>
  }

  export default Explore;
  