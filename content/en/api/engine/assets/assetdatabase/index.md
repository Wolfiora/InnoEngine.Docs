---
uid: api.inno.assets.6d1e482179c7cd34
symbol: "engine:Inno.Assets:T:Inno.Assets.AssetDatabase"
source: xml
reviewed: 29445f6095b248316a8bbc6d751bbcbc144928b0d5debfc1fa7035d3d4ebc516
title: "AssetDatabase"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
contracts:
- project.inno-assets
aliases: []
---

Loads canonical runtime assets exclusively from a verified catalog and content-addressed artifact bundles.

## Remarks

This database never reads project source files, creates source mounts, runs importers, or writes content. One runtime session owns one database instance and disposes it before releasing its identity services.

Separates immutable artifact preparation from owner-thread asset materialization.
