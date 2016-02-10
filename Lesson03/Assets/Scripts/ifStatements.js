#pragma strict
var makeCube = true;
var cube : GameObject;

function Start () {
	if (makeCube == true){
	   Instantiate (cube);
           makeCube = false;
	}
}

function Update () {

}