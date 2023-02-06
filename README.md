# angular_vehicleapp

# Angular Project of Vehicles Data Management APP:-

""This is a project like an RTO Vehicles Data managementSystems with ANgular and bootstrap for Vehicle Data:""

## How to Run The App:

### Clone the repo

```shell
git clone https://github.com/Anitha-StalkBitz29/angular_vehicleapp.git
cd carapp
```

### Install all npm packages and node server
Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```
Install the node and npm modules.

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `3000`.
Shut it down manually with `Ctrl-C`.


## Add boostrap CDN links for Boostrap coloumn components 
Both Js and Css libraries need to be included in the index.html file.

## To Start the localhost server
ng serve

## Start the Json Server with the following commands
1. npm install json-server
2. json-server --watch db.json


## The Component and folder structure:
	*Created a new component for dashboard to display the main dashboard screen for vehciles data management system
		ng g c dashboard
	*import the component in app.module.ts file and the imports
	*Wherever necessary boostrap class like navbar and flex property used.
	*Bootstrap modal and forms are used to show the data inside the dashboard for all action systems - add, edit and delete
	*Dashboard component includes the following:
		Add New Vehicle Data
		modal data - 
		Edit and Delete operations
		After CLick of edit button , each record can be updated successfully.
		Delete operation to delete the record from the data
	
	*Model Created for Vehicle Data to get, post data from the formcontrol
	*Dynamically the data is managed for the forms modules of addNewVehiclesData() method , which gets the data from formscontrolName from the formsmodal , on click of 
	"Add New Vehicles details" and update.
	
	*Created api.service.ts for the get, post API calls 
		API service is added for getVehicleData, postVehicleData, updateVehcileData, deleteVehicleData
			
	*Empty Data cannot be Updated or Added. 
	Add is disabled for empty data on click "Add" button in addNewVehiclesData();
	Update cannot be done with empty data.
	
	*Default validations added for the each FormControlNames in the modal.
	
	
###Highlighted lines of the Project as below:
	
# Angular Data binding Used using string interpolation and ngfor and ngIf loops
# Boostrap Modal and forms usage
# RxJs state managements like, subscribe, components, services 
# Common model and service file used in the application
# Validators for the formscontrols in the modal form.
# add, update, edit and delete operations done for application.


(*Logout function is not implemented.)
	



	

	

