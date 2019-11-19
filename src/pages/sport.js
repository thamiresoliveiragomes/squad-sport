function listaTipos(ESPORTE) {
    const filterTypes = []; 
    ESPORTE.map(poke => poke.type.map(type => {
      if (!filterTypes.includes(type)) {
        filterTypes.push(type);
      } else {
        return false;
      }   
    }));