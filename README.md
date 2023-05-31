# Todo REST API Documentation

### This is a REST API for managing a todo list. It provides endpoints for creating, updating, retrieving, and deleting todo items.

## Prerequisites

- Node.js installed
- MySQL server running

## Installation

1. Clone the repository:

```
git clone <repository_url>
```

2. Install dependencies:

```
cd <project_folder>
npm install
```

3. Set up the MySQL database:

   - Create a new database named `todo_list`.
   - Import the SQL dump file provided in the repository (`todo_list.sql`) into the database.
4. Configure the database connection:

   - Open the `config.js` file located in the `utility` folder.
   - Modify the `dataPool` configuration to match your MySQL database credentials.

## Usage

To start the server, run the following command:

```
npm start
```

The server will start running on `http://localhost:9090`.

## Endpoints

### Create a Todo Item

**Endpoint:** `POST /api/todo/create`

Creates a new todo item.

Request body:

```json
{
  "todo": "Do something!",
  "start_date": "2023-05-31",
  "due_date": "2023-05-31",
  "status": "ongoing"
}
```

### Get Todo List

**Endpoint:** `GET /api/todo/get_list`

Retrieves a list of all todo items.

### Get Todo Item

**Endpoint:** `GET /api/todo/get_item/:item_id`

Retrieves a specific todo item by its ID.

Parameters:

- `item_id`: The ID of the todo item.

### Update Todo Item Status

**Endpoint:** `PATCH /api/todo/update_status/:item_id/:status`

Updates the status of a todo item.

Parameters:

- `item_id`: The ID of the todo item.
- `status`: The new status of the todo item.

### Delete Todo Item

**Endpoint:** `DELETE /api/todo/delete_item/:item_id`

Deletes a todo item by its ID.

Parameters:

- `item_id`: The ID of the todo item.

### Clear Todo List

**Endpoint:** `DELETE /api/todo/clear`

Deletes all todo items from the list.

## Error Handling

If an error occurs during the API request, the server will respond with an error message in the following format:

```json
{
  "status": 404,
  "message": "No Todo were Found!"
}
```

The status field indicates the HTTP status code of the error, and the message field provides a description of the error.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize this README documentation according to your specific needs.
