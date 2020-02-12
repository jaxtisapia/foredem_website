/**
 * Created by user on 2017-10-01.
 */

import React from "react";
import Modal from "antd/lib/modal";

export function AboutUsModal(props) {
  return (
    <Modal
      title="About Us"
      visible={props.visible}
      footer={null}
      onCancel={() => props.disable()}
    >
      <div>
        <ul className="margin-medium list-items">
          <li>
            There are instances when issues crop up and pit various political
            parties against one another, a classical example is the
            controversial Representative of People's Amendment Bill (ROPAB)which
            ïsn now (ROPAL).Since it has been passed into a law in 2007.This
            issue divided the government and the opposition by then.
          </li>

          <li>
            Even at this time,many Ghanaians did not and still did not know what
            this law is all about. Another important bill which is before
            parliement is the Right To Information Bill (RTI)that has taken so
            long for it's passage by successful government.The foundation
            identifies such a lapse as one of its primary objectives. There are
            several issues that of national importance that need to be delved
            into such as the need for emvirommental consciousness-keeping our
            urban and rural areas clean.
          </li>

          <li>
            The fotndation has its objectives the contribution to the mantenance
            of peace which is a necessary ingredient of progress. conflicts
            between different tribes have occured in various parts of the
            country. Examples of such conflicts are the
            Nanumba-Konkomba,Kusasi-Mamprusi, Bimoba-Konkomba,Gonja-Nawuri and
            Dagbamba-Konkomba conflicts etc are just case in point.it's the
            belief of the organization that these conflicts occureds largely as
            a results of differences in cultural practice,land, family and other
            factors. The institution of chieftaincy plays a vital role in the
            culture of all the various ethnic groups in the country,chiefs are
            the custodians of our cultural.
          </li>

          <li>
            <h3>Who's Killing Ghana?</h3>
          </li>

          <li>
            The blame for what Ghana has become falls on you and me. Not
            Rawlings, not Kuffour , not Mahama and definitely not the civil and
            human rights advocate Akufo-Addo.
          </li>

          <li>
            Our wickedness stinks to the high heavens as we go about our daily
            lives, pulling down everyone and everything to become rich.
          </li>

          <li>
            We import substandard Chinese products, fake drugs and expired baby
            food unfit for human consumption, destroying the environment with
            galamsay aided by the Chinese and we have the nerve to complain
            about leadership and governance?
          </li>

          <li>
            We even steal from widows, orphans, and refugees. We take their food
            and sell it for profit. No conscience. No fear of God. Nothing is
            sacred. No one is spared.
          </li>

          <li>
            Our politicians create lies to win power and manipulate the minds of
            the ignorant masses.Our architects, engineers and contractors build
            substandard roads, schools, houses, hospitals, all for profit at the
            expense of human life; an invaluable item which all our profit and
            contract sum cannot buy.
          </li>

          <li>
            One would think this behavior is reserved for urchins but it would
            surprise you that this is the character of many decent looking
            people who appear to be normal but are not any better than Boko
            Haram members. They are church members, husbands, wives and sadly
            youths.
          </li>

          <li>
            We pervert justice and pretend we do not know right from wrong just
            to serve our selfish interests. We loot the State and dump the booty
            in Dubai and Mauritius banks. Slave traders pale in comparison to
            what we do to ourselves today. We are wickedness personified.
          </li>

          <li>
            We take bribe and pay bribes to change judgment, to give what others
            don't deserve to them, received what is not rightfully ours,to keep
            quiet whilst the innocent suffer,to deny those who deserve what is
            due them.
          </li>

          <li>
            So much hatred flows in our blood and we transfer it to our
            children. It's evident in what we say and do.
          </li>

          <li>
            We have fasting and prayer sessions all year long, night vigils and
            deliverance when the actual problem is us.
          </li>

          <li>
            We simply cannot learn to love others as the Bible say. It is ME, ME
            and ME ONLY. That is all that ever matters. It is sickening.
          </li>

          <li>
            Remember that God will not come from heaven to build our society for
            us.We can make our societies,communities and nations heaven or
            hell.That power lies within us. We can blame no one for what has
            befallen us as a country.We watch and appear unconcerned while acts
            of injustice is perpetrated.
          </li>

          <li>
            {" "}
            Any Christian who cannot love has no business in politics,
            Government and in Ghana.
          </li>

          <li>
            {" "}
            Until we understand this, we will continue on this path of
            destruction.
          </li>

          <li>
            We litter around and still call on Government to come and clean it
            for us.
          </li>

          <li>
            Others sleep with innocent children in the name of helping them in
            examination or get Jobs.
          </li>

          <li>I can Change,</li>

          <li>You can Change,</li>

          <li>They can Change and</li>

          <li>We can Change by Sharing and Spreading this message.</li>

          <li>Change starts with Me....</li>

          <li>and You reading this message.</li>

          <li>
            <h2>#HelpChangeGhana/SafetyGhana.</h2>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
