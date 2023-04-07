<?php
class Connect{
    protected $dbh;


    protected function connection(){
        try{
            //establishing connection, path, db name, user name, password
            $connect=$this->dbh=new PDO("mysql:local=localhost;dbname=php-api" , "root" , "");
            return $connect;

        }catch(Exceptioon $e){
            print "!error DB:" . $e->geeMessage(). "<br/>";
            die();
        }
    }

    public function set_name(){
        return $this->dbh->query("SET NAMES 'utf8'");
    }

}


?>