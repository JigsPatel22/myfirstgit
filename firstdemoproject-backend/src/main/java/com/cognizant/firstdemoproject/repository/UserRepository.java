package com.cognizant.firstdemoproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.firstdemoproject.bean.MyUser;

@Repository
public interface UserRepository extends JpaRepository<MyUser, String> {

	//User findByUsername(String username);

}
