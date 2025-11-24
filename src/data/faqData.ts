type Faq_Block = {
  id: number
  Question: string
  Response: string
}

export const Questions: Faq_Block[] = [
  {
    id: 0,
    Question: 'Who can attend TechX, and is there a registration fee?',
    Response:
      "TechX is open to all students, professionals, and tech enthusiasts interested in artificial intelligence and innovation. The conference is completely free to attend, but advance <a href='#Register'>registration</a> is required to reserve your spot.",
  },
  {
    id: 1,
    Question: 'What is the venue for the conference?',
    Response:
      "The conference will take place at the University of South Florida, <a href='https://maps.app.goo.gl/7oWiguRH6TfTTmxB8' target='_blank'>Engineering Building II</a>. 3820 USF Alumni Drive, Tampa, FL 33620.",
  },
  {
    id: 2,
    Question: 'When is it?',
    Response: 'TechX 2025 will be held on November 8th, 2025, from 11:00 AM to 5:00 PM.',
  },
  {
    id: 3,
    Question: 'Where can I find the list of speakers?',
    Response: "You can view the full list of speakers <a href='#Events'>here</a>.",
  },
  {
    id: 4,
    Question: 'How will I benefit from this conference?',
    Response:
      'TechX offers a valuable opportunity to learn from AI professionals from leading companies such as Intel, Microsoft, Jabil, Verizon, Atlassian, and Tampa Bay startups Attendees will gain insights into real-world AI applications, connect with industry experts, and expand their professional network through exclusive networking sessions and interactive discussions.',
  },
  {
    id: 5,
    Question: 'Will food or refreshments be provided?',
    Response: 'Yes, complimentary lunch and refreshments will be available for all registered attendees.',
  },
  {
    id: 6,
    Question: 'Is parking available at the venue?',
    Response:
      "It is available close to the venue at the <a href='https://maps.app.goo.gl/vbKKuMfQZyVofr548' target='_blank'>Richard A. Beard Parking facility</a> and is charged hourly for the guests (levels 2-8) using <a href='https://www.parkmobile.com' target='_blank'>ParkMobile</a> app (zone 9300).",
  },
  {
    id: 7,
    Question: 'How can I get involved with TechX?',
    Response:
      "Companies and startups interested in tabling, sponsoring, or speaking can contact the organizing team at <a href='mailto:info@techxflorida.com'>info@techxflorida.com</a>. Students interested in volunteering can fill out form <a href='https://forms.gle/dxrYSmsqJVcwb6nS8' target='_blank'>here</a>.",
  },
  {
    id: 8,
    Question: 'Will there be any recordings of the talks?',
    Response:
      'Yes, all keynote talks and selected breakout sessions will be recorded. The recordings will be made available to registered attendees after the event.',
  },
  {
    id: 9,
    Question: 'Is there a dress code for attendees?',
    Response:
      'There’s no strict dress code, but since there will be professional headshots and companies tabling and some of them hiring, you can dress smart casual or business casual if you’d like.',
  },
]
