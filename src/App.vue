<template>
  <div class="grid">
    <!-- App background -->
    <div class="top"></div>
    <div class="bottom"></div>
    <!-- App -->
    <div class="app">
      <div class="sidebar">
        <div class="sidebar-header">
          <img src="/assets/img/me.jpg" />
          <div class="sidebar-header-icons">
            <img src="/assets/img/status.svg" />
            <img src="/assets/img/message-icon.svg" />
            <img src="/assets/img/menu-icon.svg" />
          </div>
        </div>
        <div class="sidebar-notifications">
          <img src="/assets/img/notifications.svg" />
          <div class="sidebar-notifications-message">
            <span>Get Notified of New Messages</span>
            <a href="#"
              >Turn on desktop notifications <img src="/assets/img/gt-arrow.svg"
            /></a>
          </div>
        </div>
        <div class="search-chat">
          <div class="search-bar">
            <img src="/assets/img/search-icon.svg" />
            <input type="text" placeholder="Search or start new chat" />
          </div>
        </div>
        <div class="chats">
          <!-- Alice -->
          <div class="chat">
            <div class="chat-left">
              <img src="/assets/img/alice.jpg" />
            </div>
            <div class="chat-right">
              <div class="chat-right-top">
                <span class="contact-name">Alice</span>
                <span class="chat-date">12:51</span>
              </div>
              <div class="chat-right-bottom">
                <div class="chat-right-bottom-left">
                  <img
                    class="double-check-mark"
                    src="/assets/img/double-check-seen.svg"
                  />
                  <span class="chat-message-typing">Alice is typing...</span>
                </div>
                <div class="chat-right-bottom-right">
                  <span class="unread-messages-number"> 3 </span>
                  <span class="chat-options"
                    ><img src="/assets/img/down-arrow.svg"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <!-- Study group -->
          <div class="chat">
            <div class="chat-left">
              <img src="/assets/img/study-group.jpg" />
            </div>
            <div class="chat-right">
              <div class="chat-right-top">
                <span class="contact-name">Study Group</span>
                <span class="chat-date">11:20</span>
              </div>
              <div class="chat-right-bottom">
                <div class="chat-right-bottom-left">
                  <span class="chat-message-group"
                    >Emily: Why is this so difficult????😩😩😩😩😩😩</span
                  >
                </div>
                <div class="chat-right-bottom-right">
                  <span class="unread-messages-number"> 1 </span>
                  <span class="chat-options"
                    ><img src="/assets/img/down-arrow.svg"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <!-- David R Cook-->
          <div class="chat">
            <div class="chat-left">
              <img src="/assets/img/david-r-cook.jpg" />
            </div>
            <div class="chat-right">
              <div class="chat-right-top">
                <span class="contact-name">David R Cook</span>
                <span class="chat-date">Yestarday</span>
              </div>
              <div class="chat-right-bottom">
                <div class="chat-right-bottom-left">
                  <span class="chat-message">What's going on??? 🖖🖖</span>
                </div>
                <div class="chat-right-bottom-right">
                  <span class="chat-options"
                    ><img src="/assets/img/down-arrow.svg"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <!-- Timmy M Harley -->
          <div class="chat active-chat">
            <div class="chat-left">
              <img src="/assets/img/timmy-m-harley.jpg" />
            </div>
            <div class="chat-right">
              <div class="chat-right-top">
                <span class="contact-name">Timmy M Harley</span>
                <span class="chat-date">Wednesday</span>
              </div>
              <div class="chat-right-bottom">
                <img
                  class="double-check-mark"
                  src="/assets/img/double-check-seen.svg"
                />
                <div class="chat-right-bottom-left">
                  <span class="chat-message">🤣🤣🤣🤣</span>
                </div>
                <div class="chat-right-bottom-right">
                  <span class="chat-options"
                    ><img src="/assets/img/down-arrow.svg"
                  /></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Richard Hamilton -->
          <div class="chat">
            <div class="chat-left">
              <img src="/assets/img/richard-hamilton.jpg" />
            </div>
            <div class="chat-right">
              <div class="chat-right-top">
                <span class="contact-name">Richard Hamilton</span>
                <span class="chat-date">Monday</span>
              </div>
              <div class="chat-right-bottom">
                <div class="chat-right-bottom-left">
                  <img
                    class="double-check-mark"
                    src="/assets/img/double-check-unseen.svg"
                  />
                  <img class="image-icon" src="/assets/img/camera-icon.svg" />
                  <span class="chat-message">Image</span>
                </div>
                <div class="chat-right-bottom-right">
                  <span class="chat-options"
                    ><img src="/assets/img/down-arrow.svg"
                  /></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Cristy Gowen -->
          <div class="chat">
            <div class="chat-left">
              <img src="/assets/img/cristy-gowen.jpg" />
            </div>
            <div class="chat-right">
              <div class="chat-right-top">
                <span class="contact-name">Cristy Gowen</span>
                <span class="chat-date">15/9/2020</span>
              </div>
              <div class="chat-right-bottom">
                <div class="chat-right-bottom-left">
                  <img
                    class="double-check-mark"
                    src="/assets/img/double-check-seen.svg"
                  />
                  <img
                    class="microphone-icon"
                    src="/assets/img/microphone-seen.svg"
                  />
                  <span class="chat-message">1:24</span>
                </div>
                <div class="chat-right-bottom-right">
                  <span class="chat-options"
                    ><img src="/assets/img/down-arrow.svg"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <!-- Jason  +1 626-862-6274 -->
          <div class="chat">
            <div class="chat-left">
              <img src="/assets/img/jason.jpg" />
            </div>
            <div class="chat-right">
              <div class="chat-right-top">
                <span class="contact-name">+1 626-862-6274</span>
                <span class="chat-date">5/9/2020</span>
              </div>
              <div class="chat-right-bottom">
                <div class="chat-right-bottom-left">
                  <img
                    class="double-check-mark"
                    src="/assets/img/double-check-seen.svg"
                  />
                  <span class="chat-message">Thanks!!! 😀😀😀😀</span>
                </div>
                <div class="chat-right-bottom-right">
                  <span class="chat-options"
                    ><img src="/assets/img/down-arrow.svg"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <!-- Marsha Taylor -->
          <div class="chat">
            <div class="chat-left">
              <img src="/assets/img/marsha-taylor.jpg" />
            </div>
            <div class="chat-right">
              <div class="chat-right-top">
                <span class="contact-name">Marsha Taylor</span>
                <span class="chat-date">1/9/2020</span>
              </div>
              <div class="chat-right-bottom">
                <div class="chat-right-bottom-left">
                  <img
                    class="single-check-mark"
                    src="/assets/img/single-check.svg"
                  />
                  <span class="chat-message">Are you there??? 🤔🤔🤔</span>
                </div>
                <div class="chat-right-bottom-right">
                  <span class="chat-options"
                    ><img src="/assets/img/down-arrow.svg"
                  /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="chat-window-header">
          <div class="chat-window-header-left">
            <img class="chat-window-contact-image" src="/assets/img/timmy-m-harley.jpg" />
            <div class="contact-name-and-status-container">
            <span class="chat-window-contact-name">Timmy M Harley</span>
            <span class="chat-window-contact-status">Online</span>
            </div>
          </div>
          <div class="chat-window-header-right">
            <img class="chat-window-search-icon" src="/assets/img/search-icon.svg"  />
            <img class="chat-window-menu-icon" src="/assets/img/menu-icon.svg" />
          </div>
        </div>
        <div class="chat-window">
          <div class="sender">
            <span class="sender-message-tail"><img src="/assets/img/message-tail-sender.svg"></span>
            <span class="sender-message">Hey! How's it going??</span>
            <span class="message-time">21:32</span>
            <span class="message-status"><img src="/assets/img/double-check-seen.svg"></span>
          </div>
          <div class="receiver">
            <span class="receiver-message-tail"><img src="/assets/img/message-tail-receiver.svg"></span>
            <span class="receiver-message">I'm doing fine! What about you??</span>
            <span class="message-time">21:35</span>
          </div>
          <div class="sender">
            <span class="sender-message-tail"><img src="/assets/img/message-tail-sender.svg"></span>
            <span class="sender-message">I'm good, but I'm sooo bored 🥱🥱🥱</span>
            <span class="message-time">21:35</span>
            <span class="message-status"><img src="/assets/img/double-check-seen.svg"></span>
          </div>
          <div class="receiver">
            <span class="receiver-message-tail">
              <img src="/assets/img/message-tail-receiver.svg">
            </span>
            <span class="receiver-message">Check this out...</span>
            <span class="message-time">21:36</span>
          </div>
          <div class="receiver">
            <span class="receiver-message">😝😝😝</span>
            <span class="message-time">21:36</span>
          </div>
          <div class="receiver image-message">
            <span class="receiver-message"><img src="/assets/img/meme-coding.png"></span>
            <span class="message-time">21:36</span>
          </div>
          <div class="receiver image-message">
            <span class="receiver-message"><img src="/assets/img/meme-khaleesi.jpg"></span>
            <span class="message-time">21:36</span>
          </div>
          <div class="receiver receiver-audio-message">
            <div class="audio-message">
              <div class="audio-message-left">
                <img src="/assets/img/play-audio-icon.svg" />
              </div>
              <div class="audio-message-center">
                <div class="audio-message-center-top">
                  <span class="audio-message-bar"></span>
                  <input type="range" min="0" max="100" value="75">
                </div>
                <div class="audio-message-center-bottom">
                  <div class="audio-message-bottom">
                    <span class="audio-message-length">1:15</span>
                    <span class="message-time">21:36</span>
                  </div>
                </div>
              </div>
              <div class="audio-message-right">
                <img class="audio-message-contact-image" src="/assets/img/timmy-m-harley.jpg"/>
                <img class="audio-message-microphone" src="/assets/img/microphone-seen.svg">
              </div>
            </div>
          </div>
          <div class="sender">
            <span class="sender-message-tail"><img src="/assets/img/message-tail-sender.svg"></span>
            <span class="sender-message">hahahahaaha</span>
            <span class="message-time">21:39</span>
            <span class="message-status"><img src="/assets/img/double-check-seen.svg"></span>
          </div>
          <div class="sender">
            <span class="sender-message">🤣🤣🤣🤣</span>
            <span class="message-time">21:39</span>
            <span class="message-status"><img src="/assets/img/double-check-seen.svg"></span>
          </div>
        </div>
        <div class="type-message-bar">
          <div class="type-message-bar-left">
            <img src="/assets/img/icons.svg" />
            <img src="/assets/img/attach-icon.svg" />
          </div>
          <div class="type-message-bar-center">
            <input type="text" placeholder="Type a message" >
          </div>
          <div class="type-message-bar-right">
            <img src="/assets/img/audio-icon.svg" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

