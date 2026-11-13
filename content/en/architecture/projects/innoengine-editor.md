---
title: InnoEngine.Editor
description: "The development executable that directly starts the SDK-selected Editor product."
uid: project.innoengine-editor
kind: project
owners: [InnoEngine.Editor]
---
# InnoEngine.Editor

The development executable that directly starts the SDK-selected Editor product.

Use the task linked below before inspecting this implementation entry.

## Start with the workflow

[Build and run the Editor](../../contributing/development-entries.md) or follow [your first Editor session](../../getting-started/first-editor-session.md). The selected SDK host must have its real platform/toolchain prerequisites.

## Compile and start one product

Project evaluation selects a WindowsX64 or MacOSArm64 Editor reference. Program calls the corresponding public composition Run on the original main thread. Common Editor services and backend implementations remain in their own libraries. Starting the product does not invoke MSBuild or locate a second prebuilt Editor.

Normal entry builds retain their actual SDK reference closure independently of IDE Build.0 exclusions. Design-time evaluation keeps IDE reference policy and does not prepare Native products. Transitive product outputs provide the actual Native deployment index and tools; loading uses the product's explicit resolver.

## Protect the running deployment

The entry holds a shared product lease for its declared target/configuration. Product clean and CLI editor builds require exclusive access to the same owner. The lock location comes from build metadata, not checkout scanning or a guessed startup receipt. The product host owns session/device/work/callback retirement.

Program owns cancellation and removes its Ctrl+C handler on exit. Exit codes are 0 for normal completion, 2 for cancellation and 1 for unhandled failure. Unsupported SDK hosts fail explicitly. This captured executable exposes no public/protected CLR API.

## Branding and distribution

Windows ApplicationIcon and platform window branding use the existing logo.ico. The macOS platform supplies the application-bundle target, Info.plist and licensed logo.icns; the common entry imports the declared platform target without implementing a second bundle pipeline. Publishing an unsigned development app does not certify macOS interaction or authorize a formal release.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/entry/InnoEngine.Editor/InnoEngine.Editor.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.
