import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import '@/styles/services.css'
import { ServiceOffering } from '@components/ServiceOffering'
import { PageContainer } from '@components/PageContainer'
import { PageTitle } from '@components/PageTitle'

function ServicesPage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>The Next Step Dance Studio - Services</title>
        <meta
          name="description"
          content="The Next Step Dance Studio, we offer classes in a variety of dance styles. Creative Movement, Combo Classes, Hip Hop, Tap, Ballet, Jazz, Lyrical. Serving the Berks County area of Birdsboro, Douglassville, Morgantown, and Reading."
        />
      </Helmet>
      <PageContainer>
        <PageTitle>Services</PageTitle>
        <div className="services">
          <ServiceOffering
            title="Creative Movement (3-4 year olds)"
            image="https://nebula.wsimg.com/a1393eca7721170dd144b399128551e1?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1"
            price="Call for price"
          >
            A special class for a special age, dance activities emphasize the fun and excitement of
            discovering the world through movement. Children will enjoy learning the basic skills of
            ballet, tap, jazz, and tumbling with the use of music and props to develop basic motor
            and locomotor skills.
          </ServiceOffering>
          <ServiceOffering title="Combo (5-6 year olds)" price="Call for price">
            Basic dance skills and vocabulary are introduced at an age appropriate level with an
            emphasis on self-expression and creativity. This class containing styles of ballet, tap,
            jazz, and tumbling will help to prepare students for future participation in any type of
            structure dance class.
          </ServiceOffering>
          <ServiceOffering
            title="Tap (All ages and levels)"
            image="https://nebula.wsimg.com/d3cddc424f310dc233740115a3b5a60f?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1"
            price="Call for price"
          >
            Our tap program offers skill development from beginner through advanced levels. Classes
            emphasize the development and strengthening of technique and terminology, while
            highlighting the importance of rhythm and sound.
          </ServiceOffering>
          <ServiceOffering
            title="Jazz (All ages and levels)"
            image="https://nebula.wsimg.com/59bb6bc9e6c761e32bf3dce386ed394d?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1"
            price="Call for price"
          >
            Classes teach basic jazz dance technique, terminology, and movement quality with an
            emphasis on proper execution of jazz isolations, rhythms and style performed to
            contemporary music. Jazz dance promotes flexibility, timing, and musical awareness. We
            challenge our students with many different forms of jazz and recommend that jazz be
            taken in conjunction with ballet to produce the well-rounded jazz dancer.
          </ServiceOffering>
          <ServiceOffering
            title="Ballet (All ages and levels)"
            image="https://nebula.wsimg.com/46b5df54a3964821600367f607fe0be5?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1"
            price="Call for price"
          >
            Emphasizes the development of classical ballet skills with a focus on proper placement
            and alignment. Students will learn ballet vocabulary through barre and center work while
            building strength and flexibility. Ballet helps develop grace and poise for dancers.
            Ballet is also the basis of all structured forms of dance.
          </ServiceOffering>
          <ServiceOffering
            title="Hip Hop (All ages and levels)"
            image="https://nebula.wsimg.com/025e9f6e19f84ce9e7e7ea2fecddc84a?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1"
            price="$55"
          >
            A high-energy class that uses the latest sounds in rap, R&B, and pop music together with
            today's hottest movements presented in an age appropriate manner. This fun class gives
            students the opportunity to develop their own sense of style.
          </ServiceOffering>
          <ServiceOffering title="Lyrical (Approval of instructor required)" price="Call for price">
            This class focuses on teaching dancers about creative expression. Lyrical dance is the
            fusion of ballet and jazz technique bound by the dancer's inner emotion. Lyrical dance
            interprets music or words showing the audience the emotion of the particular piece.
            Ballet must be taken in conjunction with this class.
          </ServiceOffering>
          <ServiceOffering
            title="Acro (5-6yrs, 7-9yrs, 10-11yrs)"
            image="https://nebula.wsimg.com/66af31581edc26aad9501e2c33bfe6f0?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1"
            price="Call for price"
          >
            This class is centered on fundamental acrobatic technique to increase flexibility,
            strength, balance, coordination, endurance, timing, body awareness, self-discipline, and
            confidence. Acro classes will encompasses a number of tumbling moves ranging from
            forward rolls and cartwheels at level 1, through aerials and back handsprings at the
            advanced level.
          </ServiceOffering>
        </div>
      </PageContainer>
    </>
  )
}

export default ServicesPage
