"use client";

import {
  Drawer,
  Anchor,
  Grid,
  Button,
  CloseButton,
  NavLink,
} from "@mantine/core";
import Link from "next/link";
import {
  IconMovie,
  IconDeviceTv,
  IconStar,
  IconUsers,
  IconWorld,
  IconPlayerPlay,
} from "@tabler/icons-react";

export default function AppDrawer({
  opened,
  closeCallback,
}: {
  opened: boolean;
  closeCallback: () => void;
}) {
  return (
    <Drawer
      opened={opened}
      onClose={closeCallback}
      title={
        <Button color="yellow.5" c="black">
          IMDb
        </Button>
      }
      position="top"
      size="100%"
      closeButtonProps={{
        icon: <CloseButton size="50px" color="yellow.5" radius="xl" p="xs" />,
      }}
      transitionProps={{ duration: 300 }}
      py="32px"
    >
      <Grid>
        <Grid.Col span={4}>
          <NavLink
            leftSection={<IconMovie />}
            label="Movies"
            defaultOpened
            disabled
          >
            <NavLink
              component={Link}
              href="/calendar/?ref_=nv_mv_cal"
              label="Release Calendar"
            />
            <NavLink
              component={Link}
              href="/chart/top/?ref_=nv_mv_250"
              label="Top 250 Movies"
            />
            <NavLink
              component={Link}
              href="/chart/moviemeter/?ref_=nv_mv_mpm"
              label="Most Popular Movies"
            />
            <NavLink
              component={Link}
              href="/feature/genre/?ref_=nv_ch_gr"
              label="Browse Movies by Genre"
            />
            <NavLink
              component={Link}
              href="/chart/boxoffice/?ref_=nv_ch_cht"
              label="Top Box Office"
            />
            <NavLink
              component={Link}
              href="/news/movie/?ref_=nv_nw_mv"
              label="Movie News"
            />
            <NavLink
              component={Link}
              href="/india/toprated/?ref_=nv_mv_in"
              label="India Movie Spotlight"
            />
          </NavLink>
        </Grid.Col>
        <Grid.Col span={4}>
          <NavLink
            leftSection={<IconDeviceTv />}
            label="TV Shows"
            defaultOpened
            disabled
          >
            <NavLink
              component={Link}
              href="/chart/toptv/?ref_=nv_tvv_250"
              label="What's on TV & Streaming"
            />
            <NavLink
              component={Link}
              href="/chart/toptv/?ref_=nv_tvv_250"
              label="Top 250 TV Shows"
            />
            <NavLink
              component={Link}
              href="/chart/tvmeter/?ref_=nv_tvv_mptv"
              label="Most Popular TV Shows"
            />
            <NavLink
              component={Link}
              href="/feature/genre/"
              label="Browse TV Shows by Genre"
            />
            <NavLink
              component={Link}
              href="/news/tv/?ref_=nv_nw_tv"
              label="TV News"
            />
          </NavLink>
        </Grid.Col>
        <Grid.Col span={4}>
          <NavLink
            leftSection={<IconStar />}
            label="Awards & Events"
            defaultOpened
            disabled
          >
            <NavLink
              component={Link}
              href="/oscars/?ref_=nv_ev_csegosc"
              label="Oscars"
            />
            <NavLink
              component={Link}
              href="/sxsw/?ref_=nv_ev_csegsxsw"
              label="SXSW Film Festival"
            />
            <NavLink
              component={Link}
              href="/festival-central/cannes/?ref_=nv_ev_csegcann"
              label="Cannes Film Festival"
            />
            <NavLink
              component={Link}
              href="/starmeterawards/?ref_=nv_ev_sma"
              label="STARmeter Awards"
            />
            <NavLink
              component={Link}
              href="/awards-central/?ref_=nv_ev_csegawds"
              label="Awards Central"
            />
            <NavLink
              component={Link}
              href="/festival-central/?ref_=nv_ev_csegfest"
              label="Festival Central"
            />
            <NavLink
              component={Link}
              href="/event/all/?ref_=nv_ev_all"
              label="All Events"
            />
          </NavLink>
        </Grid.Col>
        <Grid.Col span={4}>
          <NavLink
            leftSection={<IconUsers />}
            label="Celebs"
            defaultOpened
            disabled
          >
            <NavLink
              component={Link}
              href="/feature/bornondate/?ref_=nv_cel_brn"
              label="Born Today"
            />
            <NavLink
              component={Link}
              href="/chart/starmeter/?ref_=nv_cel_m"
              label="Most Popular Celebs"
            />
            <NavLink
              component={Link}
              href="/news/celebrity/?ref_=nv_cel_nw"
              label="Celebrity News"
            />
          </NavLink>
        </Grid.Col>
        <Grid.Col span={4}>
          <NavLink
            leftSection={<IconPlayerPlay />}
            label="Watch"
            defaultOpened
            disabled
          >
            <NavLink
              component={Link}
              href="/what-to-watch/?ref_=nv_watch"
              label="What to Watch"
            />
            <NavLink
              component={Link}
              href="/trailers/?ref_=nv_mv_tr"
              label="Latest Trailers"
            />
            <NavLink
              component={Link}
              href="/originals/?ref_=nv_sf_ori"
              label="IMDb Originals"
            />
            <NavLink
              component={Link}
              href="/imdbpicks/?ref_=nv_pi"
              label="IMDb Picks"
            />
            <NavLink
              component={Link}
              href="/spotlight/?ref_=nv_vi_csegspot"
              label="IMDB Spotlights"
            />
            <NavLink
              component={Link}
              href="/search/title/?title_type=podcastSeries&ref_=nv_pod"
              label="IMDb Podcasts"
            />
          </NavLink>
        </Grid.Col>
        <Grid.Col span={4}>
          <NavLink
            leftSection={<IconWorld />}
            label="Community"
            defaultOpened
            disabled
          >
            <NavLink
              component={Link}
              href="/imdb?ref_=cons_nb_hlp"
              label="Help Center"
            />
            <NavLink
              component={Link}
              href="/czone?ref_=nv_cm_cz"
              label="Contributor Zone"
            />
            <NavLink
              component={Link}
              href="/poll/?ref_=nv_cm_pl"
              label="Polls"
            />
          </NavLink>
        </Grid.Col>
      </Grid>
    </Drawer>
  );
}
