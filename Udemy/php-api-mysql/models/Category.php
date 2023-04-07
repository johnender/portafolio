<?php
    class Category extends Connect{

        //returning all the intem with estatus 1
        public function get_category(){
            $connect=parent::connection();

            parent::set_name();

            $sql="SELECT * FROM tm_category WHERE est=1";
            $sql=$connect->prepare($sql);
            $sql->execute();

            return $result = $sql->fetchAll(PDO::FETCH_ASSOC);
        }

        //returning the selected item, by id
        public function get_category_x_id($cat_id){
            $connect=parent::connection();
            parent::set_name();
            $sql="SELECT * FROM tm_category WHERE est=1 AND cat_id=?";
            $sql=$connect->prepare($sql);
            $sql->bindValue(1,$cat_id);
            $sql->execute();

            return $result = $sql->fetchAll(PDO::FETCH_ASSOC);
        }


        public function insert_category($cat_name, $cat_obs){
            $connect=parent::connection();
            parent::set_name();
            $sql="INSERT INTO tm_category(cat_id, cat_name, cat_obs, est) VALUES(NULL, ?, ?, '1')";
            $sql=$connect->prepare($sql);
            //bind the value for each ?
            $sql->bindValue(1,$cat_name);
            $sql->bindValue(2,$cat_obs);
            $sql->execute();

            return $result = $sql->fetchAll(PDO::FETCH_ASSOC);
        }


        public function update_category($cat_id, $cat_name, $cat_obs){
            $connect=parent::connection();
            parent::set_name();
            $sql="UPDATE tm_category set cat_name=?, cat_obs=? WHERE cat_id=?";
            $sql=$connect->prepare($sql);
            //bind the value for each ?
            $sql->bindValue(1,$cat_name);
            $sql->bindValue(2,$cat_obs);
            $sql->bindValue(3,$cat_id);
            $sql->execute();

            return $result = $sql->fetchAll(PDO::FETCH_ASSOC);
        }

        public function delete_category($cat_id){
            $connect=parent::connection();
            parent::set_name();
            $sql="UPDATE tm_category set est='0' WHERE cat_id=?";
            $sql=$connect->prepare($sql);
            $sql->bindValue(1,$cat_id);
            $sql->execute();

            return $result = $sql->fetchAll(PDO::FETCH_ASSOC);
        }
    }



?>