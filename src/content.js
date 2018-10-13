import React, { Component } from 'react';

const MENUBOXES = [
    'personal',
    'education',
    'skills',
    'work',
    'courses',
    'projects'
];

const TITLES = [
    [
        'Personal data',
        '',
        ''
    ],[
        'Licenciature in Chemistry',
        'Master of Science',
        'Doctorate in Computational Chemistry'
    ],[
        'Design',
        'Coding',
        'Tools'
    ],[
        'Project and Accounts Manager',
        'Product Designer',
        ''
    ],[
        'FreeCodeCamp',
        '',
        ''
    ],[
        'Projects',
        '',
        ''
    ]
];

const CONTENT = [
    [ // PERSONAL
        <span>
            <p>C<span className='number'>/</span>Maresme, <span className='number'>167 31</span></p><br />
        <p><span className='number'>08020</span> Barcelona Spain</p><br />
        <p><span className='number'>(+34)631210170</span></p><br />
        <p>martinez.s.luis@gmail.com</p><br />
        <p><a href='https://www.linkedin.com/in/luismarsu/' target='_blank'>LinkedIn</a>, <a href='https://github.com/luis-martinez-s' target='_blank'>GitHub</a>, <a href='https://codepen.io/luis-martinez-s/' target='_blank'>CodePen</a>, <a href='https://stackoverflow.com/users/2296052/user2296052' target='_blank'>Stack overflow</a></p><br />
        <p>Birth date: <span className='number'>13/08/1984</span></p><br />
        <p>Able and willing to travel to client sites or foreign offices as required</p><br />
        <p>Possibility to relocate as well as to work remotely</p>
        <ul>
            <li>Spanish: Native</li>
            <li>Catalan: Native</li>
            <li>English: Excellent verbal and written skills</li>
            <li>German: Basic conversation</li>
        </ul>
        <p>I am committed to change my career to tech<span className='number'>/</span>development, and I need an opportunity to put
my new skills into practice.</p><br />
        </span>,

        <p></p>,

        <p></p>
    ],[ // EDUCATION
        <span>
        <p><span className='number'>2002–2008</span>, University of Barcelona</p>
        </span>,

        <span>
        <p><span className='number'>2008–2009</span>, University of Barcelona</p><br />
        <p>Master in Computational Chemistry</p>
        </span>,

        <span>
        <p><span className='number'>2009–2014</span>, Ruhr University Bochum, Germany</p><br />
        <p>Scientific research in the area of Computational Chemistry</p><br />
        <p><a href='https://www.researchgate.net/profile/Luis_Martinez-Suarez/contributions' target='_blank'>Publication of <span className='number'>3</span> scientific works in scientific journals</a></p><br />
        <p>I work every day with:</p><br />
        <ul>
            <li>Linux</li>
            <li>Bash</li>
            <li>Python, Fortran9</li>
            <li>LaTex</li>
        </ul>
        </span>
    ],[ // SKILLS
        <span>
        <ul>
            <li>HTML<span className='number'>5</span></li>
            <li>CSS<span className='number'>3</span></li>
            <li>Photoshop CC <span className='number'>2018</span></li>
            <li>Bootstrap <span className='number'>4</span></li>
        </ul>
        </span>,

        <span>
        <ul>
            <li>Javascript ES<span className='number'>6</span></li>
            <li>React</li>
            <li>Redux</li>
        </ul>
        </span>,

        <span>
        <ul>
            <li>Git</li>
            <li>Bash</li>
        </ul>
        </span>
    ],[ // WORK
        <span>
        <p><span className='number'>2015-2018</span>, <a href='https://www.vsourz.com/' target='_blank'>Vsourz Digital Agency, Barcelona</a></p><br />
        <p>Project manager of website design and development</p><br />
        <p>Daily tasks:</p><br />
        <ul>
            <li>Bridge between customer and development team</li>
            <li>Determine project specifications (timings, pricing, production planning)</li>
            <li>Product testing</li>
            <li>WordPress backend</li>
        </ul>
        </span>,

        <span>
        <p><span className='number'>2016-2018</span>, <a href='https://www.finalbosscardgame.com/' target='_blank'>Entrepreneurial activity</a></p><br />
        <p>Creation of a print card game financed launching a successful Kickstarter campaign</p><br />
        <p>Done in parallel to work experience</p><br />
        <p>Tasks involved</p><br />
        <ul>
            <li>Product idea and design</li>
            <li>Creation of artistic assets</li>
            <li>Business planning and strategy</li>
        </ul>
        </span>,

        <span>
        <p></p>
        </span>
    ],[ // COURSES
        <span>
        <p><span className='number'>2018</span> <a href='https://www.freecodecamp.org/'>https://www.freecodecamp.org/</a></p><br />
        <ul>
            <li>Module <span className='number'>1</span>: HTML5, CSS<span className='number'>3</span>, responsive design</li>
            <li>Module <span className='number'>2</span>: JavaScript ES<span className='number'>6</span></li>
            <li>Module <span className='number'>3</span>: Bootstrap <span className='number'>4</span>, Sass, jQuery, React, Redux</li>
        </ul>
        </span>,

        <span>
        <p></p>
        </span>,

        <span>
        <p></p>
        </span>,
    ],[ // PROJECTS
        <span>
        <ul>
            <li><a href='http://luis-martinez.net/' target='_blank'>My website</a></li>
            <li><a href='https://luis-martinez-s.github.io/social-card/' target='_blank'>Social card</a></li>
            <li><a href='https://codepen.io/saito200/full/qJdXjY/' target='_blank'>Pomodoro clock</a></li>
            <li><a href='https://codepen.io/saito200/full/gBbbza/' target='_blank'>Retro calculator</a></li>
            <li><a href='https://codepen.io/saito200/full/yxmqBJ/' target='_blank'>Drum machine</a></li>
            <li><a href='https://codepen.io/saito200/full/YOoXbg/' target='_blank'>Random quote machine</a></li>
            <li><a href='https://codepen.io/saito200/full/gdNjxp/' target='_blank'>Markdown previewer</a></li>
        </ul>
        </span>,

        <span>
        <p></p>
        </span>,

        <span>
        <p></p>
        </span>
    ]
]

export { MENUBOXES, TITLES, CONTENT };