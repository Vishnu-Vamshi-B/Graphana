# Graphana Dashboard

### Develop a Dashboard application to display cluster metrics with authentication controls

### Context

Graphana is an online application that provides dashboard views with the metrics data. The USP of the application is `Dashboard anything, Observe everything`.​

The application allows to visualize the data stored in json-server. ​

With Graphana, it is possible to create, explore, and share all the data through beautiful, flexible dashboards. ​

The data is fetched from the servers and presented on the dashboard.​

### Problem

The Graphana application is expected to fetch data by consuming the various APIs that provide the required details in JSON format. However, there are few services which are unable to expose their data through API. For those services, the application admin has to manually enter data and get it persisted on the json-server.​

You, as a developer, has been assigned the task to design forms and dashboard views.​

The dashboard view will be accessible to all the users while the add metrics and edit metrics views will be accessible to only the authenticated user, which is most likely to be the admin. ​

Also, the application should prompt the user to save the unsaved changes on the form before leaving the form view.​

### Instructions

1. The landing view should display the Graphana Dashboard with existing metrics data displayed as cards.
2. The landing view should be accessible to all users.
3. The link to Add Metrics should direct the authenticated users to view that allows users to add new metrics.
4. If an unauthenticated user attempts to access the Add Metrics view, the user should be redirected to the Token form view.
5. User is expected to input minimum 6 character long token and submits it for validation.
6. For successful validation, the application should redirect the user to Add Metrics form view.
7. Post successful addition of metrics, user should be navigated to dashboard view and the newly added metrics data should be visible on dashboard view.
8. Each metrics card on dashboard view, should allow registered users to edit it.
9. The edit link should redirect the registered user to the Edit Metrics view, which displays the edit form populated with metrics data.
10. The metrics data should be retrieved based on the id parameter retrieved from the route that navigates user to edit view.
11. If an unauthenticated user attempts to access the Edit Metrics view, the user should be redirected to the Token form view.
12. The user should not be allowed to leave the Add Metrics or Edit Metrics forms without saving the data.

**Note:**

- The boilerplate contains metrics.json file that stores the metrics data
- The data from the file is accessed through json-server running at port 3000

**For more details on the working of the application watch the video available in this [git repository](https://myrepos.stackroute.niit.com/gps-frontend-workspace/gps-frontend-challenge-boilerplates/angular2-boilerplates/graphana-video-tour)**