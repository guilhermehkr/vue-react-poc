import { render } from "@testing-library/react";

import { VideoPlayer } from "../ReactVideoPlayer";

describe("<ReactVideoPlayer />", () => {
  it("should render viewer container properly", () => {
    const { container } = render(
      <VideoPlayer accountId="k9Mwad" streamName="simulcastmultiview" />
    );
    const viewerContainer = container.querySelector("#viewer-container");

    expect(viewerContainer).toBeDefined();
  });

  it("should render volume slider with default value properly", () => {
    const { container } = render(
      <VideoPlayer accountId="k9Mwad" streamName="simulcastmultiview" />
    );
    const volumeSlider = container.querySelector("#volumeSlider");

    expect(volumeSlider).toBeDefined();
    expect(volumeSlider).toHaveProperty("value", "1");
  });
});
