package com.EduBridge;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="user")
public class User 
{
	@Id
	@Size(min=2, max=30) 
	@NotNull
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="user_id")
	private int user_id;
	@Size(min=2, max=30) 
	@NotNull

	@Column(name="first_name")
	private String first_name;
	@Size(min=2, max=30) 
	@NotNull

	@Column(name="last_name")
	private String last_name;
	@Size(min=2, max=30) 
	@NotNull


	@Column(name="user_name")
	private String username;
	@Size(min=2, max=30) 
	@NotNull

	@Column(name="user_password")
	private String userpassword;
	@Size(min=2, max=30) 
	@NotNull 

	@Column(name="user_address1")
	private String user_address1;
	@Size(min=2, max=30) 
	@NotNull

	@Column(name="user_address2")
	private String user_address2;
	
	
	
	
	
	public User() {
		
	}
	public User(int user_id, String first_name, String last_name, String user_name, String user_password,
			String user_address1, String user_address2) {
		super();
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = user_name;
		this.userpassword = user_password;
		this.user_address1 = user_address1;
		this.user_address2 = user_address2;
	}
	public int getuser_id() {
		return user_id;
	}
	public void setuser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getUser_name() {
		return username;
	}
	public void setUser_name(String username) {
		this.username = username;
	}
	public String getUserpassword() {
		return userpassword;
	}
	public void setUserpassword(String userpassword) {
		this.userpassword = userpassword;
	}
	public String getUser_address1() {
		return user_address1;
	}
	public void setUser_address1(String user_address1) {
		this.user_address1 = user_address1;
	}
	public String getUser_address2() {
		return user_address2;
	}
	public void setUser_address2(String user_address2) {
		this.user_address2 = user_address2;
	}
	
	
}