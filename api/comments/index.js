module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Sample array of comments
    const comments=[
        {
          "user_id": 1,
          "user_name": "John Doe",
          "delivery_status": "received",
          "distributor": "Mark",
          "comment": "The food was delivered on time and everything was fresh."
        },
        {
          "user_id": 2,
          "user_name": "Jane Smith",
          "delivery_status": "not_received",
          "distributor": "Sarah",
          "comment": "I waited the whole day but no one showed up. I didn't get any food."
        },
        {
          "user_id": 3,
          "user_name": "Michael Brown",
          "delivery_status": "received",
          "distributor": "Paul",
          "comment": "Got my food but it was a little late. Everything was okay otherwise."
        },
        {
          "user_id": 4,
          "user_name": "Emily White",
          "delivery_status": "received",
          "distributor": "Mark",
          "comment": "Food arrived on time and was in great condition."
        },
        {
          "user_id": 5,
          "user_name": "Chris Black",
          "delivery_status": "not_received",
          "distributor": "Sarah",
          "comment": "I was told the food would arrive by noon, but it never came."
        },
        {
          "user_id": 6,
          "user_name": "Laura Green",
          "delivery_status": "received",
          "distributor": "Paul",
          "comment": "Food arrived late but still acceptable."
        },
        {
          "user_id": 7,
          "user_name": "Peter Wilson",
          "delivery_status": "received",
          "distributor": "Mark",
          "comment": "Everything went smoothly. The food arrived as expected."
        },
        {
          "user_id": 8,
          "user_name": "Sophia Taylor",
          "delivery_status": "not_received",
          "distributor": "Sarah",
          "comment": "I didn't receive my food today."
        },
        {
          "user_id": 9,
          "user_name": "Matthew Adams",
          "delivery_status": "received",
          "distributor": "Paul",
          "comment": "Food was delivered, but it was missing some items."
        },
        {
          "user_id": 10,
          "user_name": "Olivia Brown",
          "delivery_status": "received",
          "distributor": "Mark",
          "comment": "Food arrived right on time. Everything was perfect."
        },
        {
          "user_id": 11,
          "user_name": "Nathan King",
          "delivery_status": "received",
          "distributor": "Paul",
          "comment": "Food was a bit delayed, but I did get it."
        },
        {
          "user_id": 12,
          "user_name": "Ava Scott",
          "delivery_status": "not_received",
          "distributor": "Sarah",
          "comment": "I waited for hours but still no food. This is the second time this happened."
        },
        {
          "user_id": 13,
          "user_name": "Daniel Harris",
          "delivery_status": "received",
          "distributor": "Mark",
          "comment": "Got my food on time. Thanks!"
        },
        {
          "user_id": 14,
          "user_name": "Isabella Clark",
          "delivery_status": "not_received",
          "distributor": "Sarah",
          "comment": "The delivery never arrived today. I'm very disappointed."
        },
        {
          "user_id": 15,
          "user_name": "James Lewis",
          "delivery_status": "received",
          "distributor": "Paul",
          "comment": "The food was delivered a bit late, but I received it eventually."
        },
        {
          "user_id": 16,
          "user_name": "Mia Young",
          "delivery_status": "received",
          "distributor": "Mark",
          "comment": "Everything was good. The food arrived on time."
        },
        {
          "user_id": 17,
          "user_name": "Alexander Wright",
          "delivery_status": "received",
          "distributor": "Paul",
          "comment": "Food came a little late, but everything else was fine."
        },
        {
          "user_id": 18,
          "user_name": "Amelia Turner",
          "delivery_status": "received",
          "distributor": "Mark",
          "comment": "No issues. Food was delivered as promised."
        },
        {
          "user_id": 19,
          "user_name": "Lucas Hill",
          "delivery_status": "not_received",
          "distributor": "Sarah",
          "comment": "Didn't receive my food. I'm unsure what went wrong."
        },
        {
          "user_id": 20,
          "user_name": "Charlotte Martin",
          "delivery_status": "received",
          "distributor": "Paul",
          "comment": "Food was delivered, but there was some delay."
        },
        {
          "user_id": 21,
          "user_name": "Mason Rodriguez",
          "delivery_status": "received",
          "distributor": "Mark",
          "comment": "Everything was delivered on time. The service was great."
        },
        {
          "user_id": 22,
          "user_name": "Ella Harris",
          "delivery_status": "received",
          "distributor": "Paul",
          "comment": "The delivery was late, but I did get my food."
        },
        {
          "user_id": 23,
          "user_name": "Logan Edwards",
          "delivery_status": "not_received",
          "distributor": "Sarah",
          "comment": "No food delivery today. I waited but nothing arrived."
        },
        {
          "user_id": 24,
          "user_name": "Grace Walker",
          "delivery_status": "received",
          "distributor": "Mark",
          "comment": "Got my food on time. No issues."
        },
        {
          "user_id": 25,
          "user_name": "Henry Carter",
          "delivery_status": "received",
          "distributor": "Paul",
          "comment": "Late delivery but food arrived eventually."
        },
        {
          "user_id": 26,
          "user_name": "Scarlett Parker",
          "delivery_status": "received",
          "distributor": "Mark",
          "comment": "Food was delivered right on time."
        },
        {
          "user_id": 27,
          "user_name": "Jackson Bennett",
          "delivery_status": "not_received",
          "distributor": "Sarah",
          "comment": "The food delivery never arrived. Not sure what happened."
        },
        {
          "user_id": 28,
          "user_name": "Liam Ward",
          "delivery_status": "received",
          "distributor": "Paul",
          "comment": "I got my food but some items were missing."
        },
        {
          "user_id": 29,
          "user_name": "Ethan Phillips",
          "delivery_status": "received",
          "distributor": "Mark",
          "comment": "No complaints. The delivery was smooth and on time."
        },
        {
          "user_id": 30,
          "user_name": "Zoe Mitchell",
          "delivery_status": "not_received",
          "distributor": "Sarah",
          "comment": "Still no food delivery today. This is a recurring issue."
        }
      ]
      
      
      

    context.res = {
        // Return the comments as JSON
        body: comments,
        headers: {
            'Content-Type': 'application/json'
        }
    };
};
