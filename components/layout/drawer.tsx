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
      transitionProps={{ duration: 300 }}
      styles={{
        content: {
          backgroundColor: "#1f1f1f",
          color: "white",
        },
        header: {
          backgroundColor: "#1f1f1f",
          color: "white",
        },
        close: {
          color: "black",
          backgroundColor: "var(--mantine-color-yellow-5)",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          padding: "8px",
        },
      }}
    >
      <Grid>
        <Grid.Col span={4}>
          <NavLink leftSection={<IconMovie />} label="Movies" defaultOpened>
            <Anchor
              component={Link}
              href="/calendar/?ref_=nv_mv_cal"
              c="white"
              display="block"
            >
              Release Calendar
            </Anchor>
            <Anchor
              component={Link}
              href="/chart/top/?ref_=nv_mv_250"
              c="white"
              display="block"
            >
              Top 250 Movies
            </Anchor>
            <Anchor
              component={Link}
              href="/chart/moviemeter/?ref_=nv_mv_mpm"
              c="white"
              display="block"
            >
              Most Popular Movies
            </Anchor>
            <Anchor
              component={Link}
              href="/feature/genre/?ref_=nv_ch_gr"
              c="white"
              display="block"
            >
              Browse Movies by Genre
            </Anchor>
            <Anchor
              component={Link}
              href="/chart/boxoffice/?ref_=nv_ch_cht"
              c="white"
              display="block"
            >
              Top Box Office
            </Anchor>
            <Anchor
              component={Link}
              href="/news/movie/?ref_=nv_nw_mv"
              c="white"
              display="block"
            >
              Movie News
            </Anchor>
            <Anchor
              component={Link}
              href="/india/toprated/?ref_=nv_mv_in"
              c="white"
              display="block"
            >
              India Movie Spotlight
            </Anchor>
          </NavLink>
        </Grid.Col>
        <Grid.Col span={4}>
          <NavLink
            leftSection={<IconDeviceTv />}
            label="TV Shows"
            defaultOpened
          >
            <Anchor
              component={Link}
              href="/chart/toptv/?ref_=nv_tvv_250"
              c="white"
              display="block"
            >
              {"What's on TV & Streaming"}
            </Anchor>
            <Anchor
              component={Link}
              href="/chart/toptv/?ref_=nv_tvv_250"
              c="white"
              display="block"
            >
              Top 250 TV Shows
            </Anchor>
            <Anchor
              component={Link}
              href="/chart/tvmeter/?ref_=nv_tvv_mptv"
              c="white"
              display="block"
            >
              Most Popular TV Shows
            </Anchor>
            <Anchor
              component={Link}
              href="/feature/genre/"
              c="white"
              display="block"
            >
              Browse TV Shows by Genre
            </Anchor>
            <Anchor
              component={Link}
              href="/news/tv/?ref_=nv_nw_tv"
              c="white"
              display="block"
            >
              TV News
            </Anchor>
          </NavLink>
        </Grid.Col>
        <Grid.Col span={4}>
          <NavLink
            leftSection={<IconStar />}
            label="Awards & Events"
            defaultOpened
          >
            <Anchor
              component={Link}
              href="/oscars/?ref_=nv_ev_csegosc"
              c="white"
              display="block"
            >
              Oscars
            </Anchor>
            <Anchor
              component={Link}
              href="/sxsw/?ref_=nv_ev_csegsxsw"
              c="white"
              display="block"
            >
              SXSW Film Festival
            </Anchor>
            <Anchor
              component={Link}
              href="/festival-central/cannes/?ref_=nv_ev_csegcann"
              c="white"
              display="block"
            >
              Cannes Film Festival
            </Anchor>
            <Anchor
              component={Link}
              href="/starmeterawards/?ref_=nv_ev_sma"
              c="white"
              display="block"
            >
              STARmeter Awards
            </Anchor>
            <Anchor
              component={Link}
              href="/awards-central/?ref_=nv_ev_csegawds"
              c="white"
              display="block"
            >
              Awards Central
            </Anchor>
            <Anchor
              component={Link}
              href="/festival-central/?ref_=nv_ev_csegfest"
              c="white"
              display="block"
            >
              Festival Central
            </Anchor>
            <Anchor
              component={Link}
              href="/event/all/?ref_=nv_ev_all"
              c="white"
              display="block"
            >
              All Events
            </Anchor>
          </NavLink>
        </Grid.Col>
        <Grid.Col span={4}>
          <NavLink leftSection={<IconUsers />} label="Celebs" defaultOpened>
            <Anchor
              component={Link}
              href="/feature/bornondate/?ref_=nv_cel_brn"
              c="white"
              display="block"
            >
              Born Today
            </Anchor>
            <Anchor
              component={Link}
              href="/chart/starmeter/?ref_=nv_cel_m"
              c="white"
              display="block"
            >
              Most Popular Celebs
            </Anchor>
            <Anchor
              component={Link}
              href="/news/celebrity/?ref_=nv_cel_nw"
              c="white"
              display="block"
            >
              Celebrity News
            </Anchor>
          </NavLink>
        </Grid.Col>
        <Grid.Col span={4}>
          <NavLink leftSection={<IconPlayerPlay />} label="Watch" defaultOpened>
            <Anchor
              component={Link}
              href="/what-to-watch/?ref_=nv_watch"
              c="white"
              display="block"
            >
              What to Watch
            </Anchor>
            <Anchor
              component={Link}
              href="/trailers/?ref_=nv_mv_tr"
              c="white"
              display="block"
            >
              Latest Trailers
            </Anchor>
            <Anchor
              component={Link}
              href="/originals/?ref_=nv_sf_ori"
              c="white"
              display="block"
            >
              IMDb Originals
            </Anchor>
            <Anchor
              component={Link}
              href="/imdbpicks/?ref_=nv_pi"
              c="white"
              display="block"
            >
              IMDb Picks
            </Anchor>
            <Anchor
              component={Link}
              href="/spotlight/?ref_=nv_vi_csegspot"
              c="white"
              display="block"
            >
              IMDB Spotlights
            </Anchor>
            <Anchor
              component={Link}
              href="/search/title/?title_type=podcastSeries&ref_=nv_pod"
              c="white"
              display="block"
            >
              IMDb Podcasts
            </Anchor>
          </NavLink>
        </Grid.Col>
        <Grid.Col span={4}>
          <NavLink leftSection={<IconWorld />} label="Community" defaultOpened>
            <Anchor
              component={Link}
              href="/imdb?ref_=cons_nb_hlp"
              c="white"
              display="block"
            >
              Help Center
            </Anchor>
            <Anchor
              component={Link}
              href="/czone?ref_=nv_cm_cz"
              c="white"
              display="block"
            >
              Contributor Zone
            </Anchor>
            <Anchor
              component={Link}
              href="/poll/?ref_=nv_cm_pl"
              c="white"
              display="block"
            >
              Polls
            </Anchor>
          </NavLink>
        </Grid.Col>
      </Grid>
    </Drawer>
  );
}
