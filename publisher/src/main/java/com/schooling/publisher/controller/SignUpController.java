package com.schooling.publisher.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.schooling.publisher.jpa.AccountRepository;
import com.schooling.publisher.service.UserService;
import com.schooling.publisher.signup.SignupForm;
import com.schooling.publisher.web.MessageHelper;

@Controller
public class SignUpController {

    Logger logger = LoggerFactory.getLogger(SignUpController.class);

    private static final String SIGNUP_VIEW_NAME = "login/login";

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "signup")
    public String loginPage(Model model) {
        model.addAttribute(new SignupForm());
        return SIGNUP_VIEW_NAME;
    }

    @RequestMapping(value = "signup", method = RequestMethod.POST)
    public String login(@Valid @ModelAttribute SignupForm signupForm, Errors errors, RedirectAttributes ra) {
        if (errors.hasErrors()) {
            logger.error(errors.getAllErrors().toString());
            return SIGNUP_VIEW_NAME;
        }
        accountRepository.save(signupForm.createAccount());

        MessageHelper.addSuccessAttribute(ra, "login.success");
        return "redirect:/";
    }
}
