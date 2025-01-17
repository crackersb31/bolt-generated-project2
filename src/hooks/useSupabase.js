import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useSupabase(table) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: result, error } = await supabase.from(table).select('*');

        if (error) throw error;
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [table]);

  return { data, loading, error };
}
