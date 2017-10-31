import axios from 'axios';


export const selectEvent = (event) => ({
  type: "SELECT_EVENT",
  event
});


export const removeEvent = (eventId) => ({
  type: "REMOVE_EVENT",
  eventId
});

// Helper functions
// export const getOngoingEvents = (userId) => {
//   //TODO: use userId to get relavant events + replace api to getAllOnGoingEvent/{userID}
//   return new Promise ((resolve, reject) => {
//     axios.get('getAllOnGoingEvent/' + userId)
//     .then((response) => {
//       const status = response.status;
//       const statusText = response.statusText;
//       if (status === 200) {
//         const data = response.data;
//         if (data !== null) {
//           // console.log(data)
//           resolve(data);
//         }
//         else {
//           console.log("Found none events\n");
//           // reject([])
//         }
//       }
//       else {
//         console.log(statusText);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       throw error;
//     });
//   })
// }

//Defect 15
export const getOngoingEvents = (userId) => {
  //TODO: use userId to get relavant events + replace api to getAllOnGoingEvent/{userID}
  return new Promise ((resolve, reject) => {
    axios.get('api/all_event')
    .then((response) => {
      const status = response.status;
      const statusText = response.statusText;
      if (status === 200) {
        const data = response.data;
        if (data !== null) {
          // console.log(data)
          resolve(data);
        }
        else {
          console.log("Found none events\n");
          // reject([])
        }
      }
      else {
        console.log(statusText);
      }
    })
    .catch((err) => {
      console.log(err);
      throw error;
    });
  })
}

const getFinishedEvents = () => {

}

export const getMemberList = (eventId) => {
  // console.log(eventId)
  return new Promise ((resolve, reject) => {
    axios.get('api/event/eventMember/' + eventId)
      .then((response) => {
        // console.log(response);
        const status = response.status;
        const statusText = response.statusText;
        if (status === 200) {
          const data = response.data;
          if (data !== null) {
            resolve(data);
          }
          else {
            console.log("Found none members");
          }
        }
        else {
          console.log(statusText);
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  })
}

export const getBillSum = (eventId) => {
  return new Promise ((resolve, reject) => {
    axios.get('api/event/' + eventId)
      .then((response) => {
        const status = response.status;
        const statusText = response.statusText;
        if (status === 200) {
          const data = response.data;
          if (data !== null) {
            resolve(data.totalAmount);
          }
          else {
            console.log("Data is null");
          }
        }
        else {
          console.log(statusText);
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  });
}

export const deleteEvent = (eventId) => {
  return new Promise ((resolve, reject) => {
    axios.post('deleteEvent/' + eventId)
      .then((response) => {
        const data = response.data;
        // console.log(response)
        if (data !== null) {
          resolve(data);
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  })
}

export const addTotal = (eventId, userId, totalAmount) => {
  return new Promise ((resolve, reject) => {
    // console.log(typeof totalAmount);
    axios.put('event/updateTotal/' + userId + '/' + eventId, {
      totalAmount: Number(totalAmount)
    })
    .then((response) => {
      const data = response.data;
      resolve(data);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  });
}


export const inputIndividualExpense = (eventId, userId, individualAmount) => {
  return new Promise ((resolve, reject) => {
    console.log(typeof individualAmount);
    axios.post('event/individualAmount/' + eventId + '/' + userId, {
      individualAmount: Number(individualAmount)
    })
    .then((response) => {
      // console.log(response)
      const data = response.data;
      if (data !== null) {
        resolve(data);
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  })
}

export const inviteMember = () => {
  //TODO
}

// TODO: use userAccount instead
export const deleteMember = (eventId, userId, input) => {
  return new Promise ((resolve, reject) => {
    axios.put('removeUser/' + eventId, {
      userId: input
    })
    .then((response) => {
      const data = response.data;
      if (data !== null) {
        resolve(data);
      }
    })
    .catch((err) => {
      // console.log(err);
      reject(err);
      // throw err;
    })
  })

}

//TODO: add eventTime
export const createEvent = (event) => {
  return new Promise ((resolve, reject) => {
    axios.post('event/createEvent', {
      ownerID: event.userId,
      eventName: event.eventName,
      eventType: event.eventType,
      eventCategory: event.eventCategory,
      eventLocation: event.eventLocation,
      splitType: event.splitType
    })
    .then((response) => {
      const data = response.data;
      if (data !== null) {
        resolve(data);
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  })
}
