const input = [
    { id: '5001', name: 'Raju', status: 'None' },
    { id: '5002', name: 'Manoj', status: 'Glazed' },
    { id: '5005', name: 'Akka', status: 'Sugar' },
    { id: '5004', name: 'Tom', status: 'Maple' },
    { id: '5006', name: 'Sam', status: 'None' },
    { id: '5005', name: 'Joe', status: 'Sugar' }
  ];
  
  const getStatusType = (status) => {
    switch (status) {
      case 'None':
        return 'One';
      case 'Glazed':
        return 'two';
      case 'Sugar':
        return 'three';
      case 'Maple':
        return 'four';
      default:
        return 'Unknown';
    }
  };
  
  const convertArray = (input) => {
    return input.map(item => ({
      id: item.id,
      name: item.name,
      status: {
        label: item.status,
        type: getStatusType(item.status)
      }
    }));
  };
  
  const output = convertArray(input);
  console.log(output);
  