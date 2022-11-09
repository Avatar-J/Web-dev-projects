

export const FormInputs = [
    {section: "Personal Information",
    
     items: [
        {label: "First name",
         type: "text",
         name: "fname"
        },

        {
            label: "last name",
            type: "text",
            name: "lname"
        },

        

        {
            label: "age",
            type: "number",
            name: "age"
        },

        {
            label: "gender",
            type: "radio",
            name: "gender",

            gender: [
               { label: "Male"},
               { label: "female"}
            ]
        },
     ]
    },

    {
        section: "Contacts",

        items:[
            {
                label: "Phone Number",
                type: "number"
            },
            {
                label: "email",
                type: "text"
            },
            {
                label: "Region",
                type: "select",
                options: [
                    "Greater Accra", 
                    "Ashanti Region",
                    "Eastern Region",
                    "Western Region", 
                    "Central Region",
                    "Northern Region",
                    "Brong Ahafo Region",
                    "Bono Region", 
                    "Ahafo Region", 
                    "North East Region", 
                    "Oti Region", 
                    "Upper East Region", 
                    "Upper West Region",
                    "Western North Region",
                    "Volta Region",
                    "Savannah Region"
                ]
            } 

        ]
    },
    {
        section: "Courses to teach",

        items: [
            {
                label: "Course one ",
                type: "text"
            },
            {
                label: "Course two",
                type: "text"
            },
            {
                label: "Course three",
                type: "text"
            }
        ]
    }



]