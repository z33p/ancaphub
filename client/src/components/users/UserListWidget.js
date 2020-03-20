import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import CardFooter from "../ui/CardFooter";
import CardHeader from "../ui/CardHeader";
import CardBody from "../ui/CardBody";
import styled from "styled-components";
import defaultAvatar from '../../assets/default-profile-picture.jpg'
import { FormattedMessage } from "react-intl";
//import { Link } from 'react-router-dom'

const User = styled.li`
  list-style:none;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:15px;
  border-bottom:1px solid #2f3749;
  padding-bottom:15px;

  &:last-child { padding:0;margin:0;border:none}

  h4{
    margin-bottom:5px;
    font-size:1em;
    line-height:100%; 
  }
  span {
    color: ${props => props.theme.pallete.text.secondary};
    font-size:0.9em;
    line-height:100%;
    font-weight:lighter;
  }
`
const Avatar = styled.div`
  height:42px;
  width:42px;
  overflow:hidden;
  border-radius:100%;
  background-image: url(${props => props.src});
  background-size:cover;
  margin-right:10px

`

const UserListWidget = props => {
  const users = [
    {
      id:1,
      name: "Luan",
      username: "@ltoningalvan",
      avatar: '',
      isFollowing: false
    },
    {
      id:1,
      name: "Luan",
      username: "@ltoningalvan",
      avatar: '',
      isFollowing: false
    },
    {
      id:1,
      name: "Luan",
      username: "@ltoningalvan",
      avatar: '',
      isFollowing: false
    },
  ]
  return (
    <div style={{ width: "100%" }}>
      <Card>
        <CardHeader>
          <h3>
          <FormattedMessage
            id="common.youMightLike"
          />
          </h3>
        </CardHeader>
        <CardBody>
          <ul>
            {users.map(user => (
              <User>
                <div style={{display:'flex', alignItems:'center'}}>
                  <Avatar src={user.avatar !== "" ? user.avatar : defaultAvatar}/>
                  <div>
                    <h4>{user.name}</h4>
                    <span>{user.username}</span>
                  </div>
                </div>
                <Button variant="outlined" size="small" disableElevation>
                  <FormattedMessage
                    id="common.follow"
                  />
                </Button>
              </User>
            ))}
          </ul>
        </CardBody>
        <CardFooter link="/" label={<FormattedMessage id="common.showMore" />} />
      </Card>
    </div>
  )
};

export default UserListWidget;