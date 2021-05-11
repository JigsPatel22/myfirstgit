package com.cognizant.firstdemoproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.firstdemoproject.bean.MyUser;
import com.cognizant.firstdemoproject.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RegestrationController {
	@Autowired
	private UserRepository userRepository;
	
	
	
	BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
	
	@PostMapping("/registerUser")
	 public ResponseEntity<Void> registerUser(@RequestBody MyUser user, BindingResult result){
		 //=new BCryptPasswordEncoder();
		String encodedPass=user.getPassword();
		
			 encodedPass=encoder.encode(encodedPass);	
		
		user.setPassword(encodedPass);
		userRepository.save(user);
		return ResponseEntity.accepted().build() ;
	}
	

}
