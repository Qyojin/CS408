import axios from 'axios';


export const selectEvent = (event) => ({
  type: "SELECT_EVENT",
  event
});


export const removeEvent = (eventId) => ({
  type: "REMOVE_EVENT",
  eventId
});

// working version
export const getOngoingEvents = (userId) => {
  return new Promise ((resolve, reject) => {
    axios.get('getAllOnGoingEvent/' + userId)
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

//Defect 15
// export const getOngoingEvents = (userId) => {
//   return new Promise ((resolve, reject) => {
//     axios.get('api/all_event')
//     .then((response) => {
//       const data = response.data;
//       if (data !== null) {
//           resolve(data);
//         }
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
//   })
// }


export const getFinishedEvents = (userId) => {
  return new Promise((resolve, reject) => {
    axios.get('/getAllFinishedEvent/' + userId)
    .then((response) => {
      const data = response.data;
      if (data !== null) {
        resolve(data);
      }
    })
    .catch((err) => {
      console.log(err);
      throw(err);
    })
  })
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
        reject(err);
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
      reject(err);
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
      reject(err);
      // throw err;
    });
  })
}

export const inviteMember = (eventID, userId, input) => {
  //TODO
  return new Promise ((resolve, reject) => {
    axios.put('/sendInvitation', {
      userAccount: input,
      eventID: eventID
    })
    .then((response) => {
      const data = response.data;
      if (data !== null) {
        resolve(data);
      }
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    })
  })
}

export const getInvitation = (userId) => {
   return new Promise ((resolve, reject) => {
    axios.get('allInvitations/' + userId)
    .then((response) => {
      const data = response.data;
      if (data !== null) {
          // console.log(data)
          resolve(data);
        }
    })
    .catch((err) => {
      console.log(err);
      throw error;
    });
  })
}

export const acceptInvitation = (receiverId, eventId) => {
  return new Promise((resolve, reject) => {
    axios.put('/acceptInvitation/' + receiverId, {
      eventID: eventId
    }).then((response) => {
      const data = response.data;
      if (data !== null) {
        resolve(data);
      }
    })
    .catch((err) => {
      reject(err);
    })
  })
}


export const declineInvitation = (receiverId, eventId) => {
  return new Promise((resolve, reject) => {
    axios.post('/declineInvitation', {
      userID: receiverId,
      eventID: eventId
    }).then((response) => {
      const data = response.data;
      if (data !== null) {
        resolve(data);
      }
    })
    .catch((err) => {
      reject(err);
    })
  })
}


export const deleteMember = (eventId, userId, input) => {
  return new Promise ((resolve, reject) => {
    axios.put('removeUser/' + eventId, {
      userAccount: input
    })
    .then((response) => {
      const data = response.data;
      if (data !== null) {
        resolve(data);
      }
    })
    .catch((err) => {
      console.log(err);
      reject(err);
      // throw err;
    })
  })

}

export const createEvent = (event) => {
  // console.log(JSON.stringify(event));
  return new Promise ((resolve, reject) => {
    axios.post('event/createEvent', {
      ownerID: event.ownerID,
      eventName: event.eventName,
      eventType: event.eventType,
      eventTime: event.eventTime,
      eventCategory: event.eventCategory,
      eventLocation: event.eventLocation,
      splitType: event.splitType,
      invitationList: event.invitationList
    })
    .then((response) => {
      console.log(response);
      const data = response.data;
      if (data !== null) {
        resolve(data);
      }
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
  })
}


export const getEvent = (eventId) => {
  return new Promise((resolve, reject) => {
    axios.get('api/event/' + eventId)
      .then((response) => {
        const data = response.data;
        if (data !== null) {
          resolve(data);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
  })
}

export const updateEvent = (event, userId) => {
  // console.log("called updated event")
  return new Promise((resolve, reject) => {
    const eventName = event.eventName;
    const eventType = event.eventType;
    const eventCategory = event.eventCategory;
    const eventLocation = event.eventLocation;
    const splitType = event.splitType;
    const eventTime = event.eventTime;

    const eventId = event.eventId;
    
    axios.put('editEvent/' + eventId, {
      eventTime: eventTime,
      eventLocation: eventLocation,
      eventName: eventName,
      eventType: eventType,
      eventCategory: eventCategory,
      splitType: splitType,
      ownerID: userId,
      userID: userId
    })
    .then((response) => {
      const data = response.data;
      if (data !== null) {
        resolve(data);
      }
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    })
  })
}


export const verifyEvent = () => {
  //TODO
}