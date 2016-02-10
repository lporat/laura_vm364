#pragma strict


var toplimit : float = 31;
var botlimit : float = -31;
var goUp : float = 6;
var goDown : float = -4;


function Awake()
{
    GetComponent.<Rigidbody>().AddForce(Vector3(0, goUp, 0));
}

function Update() 
{
    if (transform.position.y > toplimit)
    {
        GetComponent.<Rigidbody>().velocity = Vector3.zero;
        GetComponent.<Rigidbody>().AddForce(Vector3(0, goDown, 0));
    }
    if (transform.position.y < botlimit)
    {
        GetComponent.<Rigidbody>().velocity = Vector3.zero;
        GetComponent.<Rigidbody>().AddForce(Vector3(0, goUp, 0));
    }
}