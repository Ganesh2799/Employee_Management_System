package com.EduBridge;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//
//import com.mysql.cj.callback.UsernameCallback;
//
//
//
//@Service
//public class UserServiceImpl implements UserService
//{
//	@Autowired
//	UserDao dao;
//	@Override
//	public com.EduBridge.User findByUsername(username uname) {
//		// TODO Auto-generated method stub
//		return dao.findByUsername(uname) ;
//	}
//	@PostMapping("/login")
//	public ResponseEntity<?> loginUser(@RequestBody User userData) {
//		User user = dao.findByUsername(userData.getUser_name());
//
//		if (user != null && user.getUserpassword().equals(userData.getUserpassword())) {
//			User senduser=new User();
//			senduser.setuser_id(user.getuser_id());
//			senduser.setFirst_name(user.getFirst_name());
//			senduser.setLast_name(user.getLast_name());
//			senduser.setUser_address1(user.getUser_address1());
//			senduser.setUser_address2(user.getUser_address2());
//			senduser.setUser_name(user.getUser_name());
//			return ResponseEntity.ok(senduser);
//
//		} else {
//			return (ResponseEntity<?>) ResponseEntity.internalServerError();
//		}
//	}
//
//	@Override
//	public ResponseEntity<?> saveUser(com.EduBridge.User user) {
//		User u=dao.findByUsername(user.getUser_name());
//		if(u!=null) {
//			return (ResponseEntity<?>) ResponseEntity.internalServerError();	
//		}
//		else {
//			dao.save(user);
//			return ResponseEntity.ok(user);
//		}	}
//@Override
//public User getCustomerById(int customerId) {
//		
//		return dao.findById(customerId).orElseThrow(()->new ResourceNotFoundException("Customer"));
//	}
//
//
//	@Override
//	public User saveCustomer(User customer) {
//		
//		return dao.save(customer);
//	}
//	
//	/*public Customer getCustomerByEmail(Customer customer)
//	{
//		return this.customerRepository.findByEmailID(customer.emailID).orElseThrow(()->new ResourceNotFoundException("Customer ", "Email",customer.emailID ));
//	}*/
//
//
//	@Override
//	public User updateCustomer(User customer,int customerId) {
//	
//	User existingCustomer=dao.findById(customerId).orElseThrow(()->new ResourceNotFoundException("Customer"));	
//	existingCustomer.setFirst_name(customer.getFirst_name());
//	existingCustomer.setLast_name(customer.getLast_name());
//	//existingCustomer.setDateOfBirth(customer.getDateOfBirth());
////	existingCustomer.setDistrict(customer.getDistrict());
//	//existingCustomer.setPhoneNumber(customer.getPhoneNumber());
//	//existingCustomer.setState(customer.getState());
//	//existingCustomer.setZipCode(customer.getZipCode());
//	existingCustomer.setUser_name(customer.getUser_name());
//	existingCustomer.setUserpassword(customer.getUserpassword());
//	existingCustomer.setUser_address1(customer.getUser_address1());
//	existingCustomer.setUser_address2(customer.getUser_address2());
//
//	
//	dao.save(existingCustomer);
//	return existingCustomer;
//	}
//
//
//
//	@Override
//	public List<User> getAllCustomers() {
//	
//		return dao.findAll();
//	}
//
//
//
//	@Override
//	public void deleteCustomer(int customerId) {
//		dao.findById(customerId).orElseThrow(()->new ResourceNotFoundException("Customer"));
//		dao.deleteById(customerId);
//		
//	}
//	@Override
//	public ResponseEntity<?> saveUser(User user) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public User findByUsername(String uname) {
//		// TODO Auto-generated method stub
//		return null;
//	}}



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserDao userDao;

    @Autowired
    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public User findByUsername(String uname) {
        return userDao.findByUsername(uname);
    }

    @Override
    public ResponseEntity<?> saveUser(User user) {
        User existingUser = userDao.findByUsername(user.getUser_name());
        if (existingUser != null) {
            return ResponseEntity.internalServerError().build();
        } else {
            userDao.save(user);
            return ResponseEntity.ok(user);
        }
    }

//    @Override
//    public User getCustomerById(int customerId) {
//        return userDao.findById(customerId)
//                .orElseThrow(() -> new ResourceNotFoundException("Customer", "id", customerId));
//    }

//    @Override
//    public User saveCustomer(User customer) {
//        return userDao.save(customer);
//    }
//
////    @Override
////    public User updateCustomer(User customer, int customerId) {
////        User existingCustomer = userDao.findById(customerId)
////                .orElseThrow(() -> new ResourceNotFoundException("Customer", "id", customerId));
////        existingCustomer.setFirst_name(customer.getFirst_name());
////        existingCustomer.setLast_name(customer.getLast_name());
////        existingCustomer.setUser_name(customer.getUser_name());
////        existingCustomer.setUserpassword(customer.getUserpassword());
////        existingCustomer.setUser_address1(customer.getUser_address1());
////        existingCustomer.setUser_address2(customer.getUser_address2());
////
////        userDao.save(existingCustomer);
////        return existingCustomer;
////    }
//
//    @Override
//    public List<User> getAllCustomers() {
//        return userDao.findAll();
//    }
//
//@Override
//public User updateCustomer(User customer, int customerId) {
//	// TODO Auto-generated method stub
//	return null;
//}
//
//@Override
//public void deleteCustomer(int customerId) {
//	// TODO Auto-generated method stub
//	
//}
//
//@Override
//public User getCustomerById(int customerId) {
//	// TODO Auto-generated method stub
//	return null;
//}

//    @Override
//    public void deleteCustomer(int customerId) {
//        userDao.findById(customerId)
//                .orElseThrow(() -> new ResourceNotFoundException("Customer", "id", customerId));
//        userDao.deleteById(customerId);
//    }
}

//	
