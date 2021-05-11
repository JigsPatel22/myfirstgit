package com.cognizant.firstdemoproject.security;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cognizant.firstdemoproject.bean.MyUser;

import com.cognizant.firstdemoproject.repository.UserRepository;
import java.util.Optional;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

//  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();
//
//	@Autowired
//	static UserRepository userRepository1;
//  static {
//	  userRepository1.save(new MyUser("Datta","$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e"));
//	  userRepository1.save(new MyUser("Teju","$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e"));
//	  userRepository1.save(new MyUser("Hii","$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e"));
//	  
//  }
//    inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
//        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
//  }
	
	
	@Autowired
	UserRepository userRepository;
	
	
	


  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	  //Optional<JwtUserDetails> findFirst =
	  Optional<MyUser> findFirst = userRepository.findById(username);
	  //inMemoryUserList.stream()
//		        .filter(user -> user.getUsername().equals(username)).findFirst();

		    if (!findFirst.isPresent()) {
		      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
		      
		    }
		    MyUser m=findFirst.get();
		    JwtUserDetails jwt=new JwtUserDetails(null, m.getUsername(),m.getPassword() , "ROLE_USER_2");

		    return jwt;
  }

}