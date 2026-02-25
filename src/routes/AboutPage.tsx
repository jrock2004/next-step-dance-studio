import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import allStaff from '/allStaff.jpeg'
import { StaffBio } from '@components/StaffBio'
import { PageContainer } from '@components/PageContainer'
import { PageTitle } from '@components/PageTitle'

function AboutPage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>The Next Step Dance Studio - About</title>
        <meta
          name="description"
          content="The Next Step Dance Studio, we offer classes in a variety of dance styles. Creative Movement, Combo Classes, Hip Hop, Tap, Ballet, Jazz, Lyrical. Serving the Berks County area of Birdsboro, Douglassville, Morgantown, and Reading."
        />
      </Helmet>
      <PageContainer>
        <PageTitle>Meet Our Staff</PageTitle>

        <div className="relative h-64 md:h-96 mb-10 lg:max-w-3xl lg:mx-auto overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={allStaff}
            alt="The Next Step Dance Studio Staff Members"
          />
        </div>
        <div className="mb-14">
          <p>
            The professional staff at the Next Step is the reason the studio's goal of providing a
            positive experience for all ages, levels and styles always exceeds expectations!
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <StaffBio
            name="Melissa Shutt"
            title="Owner"
            badges={[
              'Creative Movement',
              'Combo',
              'Hip Hop',
              'Tap',
              'Jazz',
              'Ballet',
              'Lyrical',
              'Acro',
              'Adult Classes',
              'Private Lessons',
            ]}
          >
            <div className="flex flex-col gap-6">
              <p className="text-gray-600">
                Missy is the Owner and the Artistic Director of The Next Step Dance Studio. She
                opened the studio in 2005 and has been the driving force behind the great things the
                studio has accomplished over the past 16 years. Currently, Missy is instructing the
                studio's hip hop, jazz, and lyrical classes. She has 30 years of experience dancing
                and teaching all ages and levels throughout Berks and many other surrounding
                counties.
              </p>
              <p className="text-gray-600">
                Her dance training began at a young age and grew into her becoming an award-winning
                dancer. Missy has studied dance on both the East and West coasts and under such
                notable choreographers such as Frank Hatchett, Savion Glover, NappyTabs, Mia
                Michaels, Tricia Miranda, Willdabeast, and Wade Robson, just to name a few. She
                continues her dance education by taking classes and attending conventions throughout
                the year. Missy has also worked extensively with cheerleading squads throughout the
                country, was a member of a professional dance team, and has choreographed numerous
                musicals in the area.
              </p>
              <p className="text-gray-600">
                Missy is proud to be able to share many dance opportunities with her students. They
                have been the opening act for the Charlie Daniels's Band, The Gin Blossoms and
                performed at many other community events. Some of these events include dancing
                throughout the year for The Philadelphia Flyers, Temple University Football, The
                Philadelphia 76ers, The Harlem Globetrotters and The Reading Royals.
              </p>
              <p className="text-gray-600">
                Additionally, her choreography has won at Regional and National levels. Among her
                many awards, the &quot;The Truly Talented Hip Hop Award&quot;, &quot;The
                Director&apos;s Double Take&quot; , &quot;Best Musicality&quot; and the ADCC Studio
                of Excellence are a few of her most memorable! She is very proud to be the Owner and
                the Artistic Director of the Next step Dance Studio and believes her passion for
                dance is what truly makes this studio a "step" above the rest!
              </p>
            </div>
          </StaffBio>
          <StaffBio
            name="Lacey Vaccaro"
            title="Dance Instructor"
            badges={['Combo', 'Tap', 'Ballet']}
          >
            Miss Lacey teaches our Tap, Ballet, and Combo Classes. She has 30+ years of experience
            in dancing and teaching. She has studied Tap, Jazz, Ballet, Pointe, Musical Theater and
            Partnering. Lacey has done outstanding choreography for Genesius Theater and was the
            Assistant Choreographer of 42nd Street for a local performing arts company. Lacey is an
            award winning teacher and choreographer. Lacey was given the prestigious award of "Truly
            Talented Tap" two years in a row at a National level. Lacey continues to study dance by
            taking classes and attending conventions. Lacey is an extremely talented tap dancer, to
            say the least, and that is shown through her students.
          </StaffBio>
          <StaffBio
            name="Erin Shertzer"
            title="Dance Instructor"
            badges={['Creative Movement', 'Combo', 'Tap']}
          >
            Miss Erin teaches Creative Movement, Combo and Tap. She started as a student at the Next
            Step when it's doors opened in 2005. Through out the years Miss Erin has studied Tap,
            Ballet, Jazz, Lyrical and Hip hop. As a dancer, Miss Erin has competed and won many
            times at dance competitions throughout Pennsylvania. Among her many awards, she was
            given the "fantastic feet' for her solo tap performance in which she also received the
            highest scoring solo award. Miss Erin has furthered her training by attending both the
            Monsters of Hip Hop and JUMP dance conventions. She is a graduate of Millersville
            University where she earned her degree in Elementary and Special Education. While at
            Millersville, Miss Erin was a dance team member and competed at NDA nationals in Daytona
            Florida. She is currently a 2nd grade teach for the Twin Valley School District. We are
            excited to welcome Miss Erin back to The Next Step and proud to have her as part of our
            teaching staff.
          </StaffBio>
          <StaffBio name="Shennan Lorenzo" title="Dance Instructor">
            Coming soon!
          </StaffBio>
          <StaffBio name="Jackie Ventresca" title="Dance Instructor">
            Coming soon!
          </StaffBio>
        </div>
      </PageContainer>
    </>
  )
}

export default AboutPage
