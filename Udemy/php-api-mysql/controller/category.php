<?php
    header('Content-Type: application/json'); //telling the file it will work with json files
    
    
    //header top allow requests from pages on the same server
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    //calling the connection file
    require_once("../config/connection.php");
    require_once("../models/Category.php");

    $category = new Category();

    //readung the data on the body from the post call
    $body = json_decode(file_get_contents("php://input"), true);

    switch($_GET["op"]){
        case "GetAll":
            $data=$category->get_category();
            echo json_encode($data); //making it json format

        break;

        case "GetId":
            $data=$category->get_category_x_id($body["cat_id"]);
            echo json_encode($data); //making it json format

        break;

        case "Insert":
            $data=$category->insert_category($body["cat_name"], $body["cat_obs"]);
            echo json_encode("inserted correctly");

        break;

        case "Update":
            $data=$category->update_category($body["cat_id"], $body["cat_name"], $body["cat_obs"]);
            echo json_encode("updated correctly");

        break;

        case "Delete":
            $data=$category->delete_category($body["cat_id"]);
            echo json_encode("unactivaded correctly");

        break;
    }
?>
