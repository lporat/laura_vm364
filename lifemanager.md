using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.SceneManagement;


public class LifeManager : MonoBehaviour {

	public int startingLives;
	private int lifeCounter;

	//adds the text
	private Text theText;

	public Player player;
	private Animator myAnimator; 

	//score
	public static int score;


	// Use this for initialization
	void Start () {
		theText = GetComponent<Text> ();

		lifeCounter = startingLives;

		player = FindObjectOfType<Player> ();

		myAnimator = GetComponent<Animator> ();

		//sets the score
		score = 3;

	}
	
	// Update is called once per frame
	void Update () {
		theText.text = "x " + lifeCounter;

		if (lifeCounter < 0) {
			myAnimator.SetTrigger("death");
			//resets the game
			SceneManager.LoadScene (1);

		}

		if (score < 0)
			score = 0;
		theText.text = " " + score;
	//	Application.LoadLevel(Application.loadedLevelName);

	}

	public void GiveLife() {
		lifeCounter++;
	}

	public void TakeLife() {
		lifeCounter--;
	}

	public static void AddPoints (int pointsToAdd) {
		score -= pointsToAdd;
	}

	public static void Reset() {
		score = 3;

	}

	//this doesn't work :( 
//	public static void DeathScene() {
//		if (lifeCounter < 0) {
//			Debug.Log ("Loser");
//	//		SceneManagement.SceneManager.LoadScene ("scene02");
//			SceneManager.LoadScene (1);
//		}
//	}

}
