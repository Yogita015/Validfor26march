import React, { Component } from 'react'
import "./Card.css";
import axios from 'axios';


export function Card () {
	const handleDeleteClick = () => {
		axios.delete('http://localhost:3001/api/employees')
		  .then(response => {
			console.log('All employees deleted successfully.');
			alert("Delleted successfully")
		  })
		  .catch(error => {
			console.error('Error deleting employees: ', error);
		  });
	  };
	
 
    return (
      <div>
      
<html lang="en">

<body>
 
<div class="wrapper">
	<div class="cards_wrap">		
		<div class="card_item">
			<div class="card_inner">
				
				<div class="role_name">Doctor Strange</div>
				<div class="real_name">
                      Request you to take My class  
                </div>
				<div class="film"><button class="button" onClick={handleDeleteClick}>Accept</button>
				</div>
			</div>
		</div>
	</div>
</div>  

</body>
</html>
      </div>
    )
  }



