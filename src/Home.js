import React from "react";
import { I18n } from "@lingui/react";
import { Trans, t, Plural, DateFormat, NumberFormat } from "@lingui/macro";
import InputValue from "./helpers/InputValue";
import IntegerStepper from "./helpers/IntegerStepper";
import LanguageSwitcher from "./helpers/LanguageSwitcher";
import { locales } from "./i18n";
import Meta from "./Meta";

export default function Home() {
  return (
    <div style={{ padding: "20px 50px" }}>
      <Meta locales={locales} />
      <p>
        <Trans>Select language:</Trans> <LanguageSwitcher locales={locales} />
      </p>

      <h1>
        <Trans>LinguiJS example</Trans>
      </h1>

      <p className="lead">
        <Trans>
          This is an example integration of LinguiJS with React apps.
        </Trans>
      </p>

      <h2>
        <Trans>Message formatting</Trans>
      </h2>

      <p>
        <Trans>
          All messages use ICU MessageFormat, but <strong>Trans</strong> macro
          generates this syntax from JSX.
        </Trans>
      </p>

      <h3>
        <Trans>Variables</Trans>
      </h3>

      <p>
        <Trans>Messages can include variables:</Trans>
      </p>

      <I18n>
        {({ i18n }) => (
          <InputValue
            defaultValue={i18n._(
              /* i18n: Default value for Hello {name} */ t`World`
            )}
            label={i18n._(t`Enter your name`)}
          >
            {name => (
              <p>
                <Trans>Hello {name}</Trans>
              </p>
            )}
          </InputValue>
        )}
      </I18n>

      <h3>
        <Trans>Components</Trans>
      </h3>

      <p>
        <Trans>
          <strong>HTML</strong> and <strong>React components</strong> works
          without extra configuration.
        </Trans>
      </p>

      <h3>
        <Trans>Props and strings</Trans>
      </h3>

      <p>
        <Trans>
          React props and strings can be translated using <strong>i18n</strong>{" "}
          core:
        </Trans>{" "}
        <I18n>
          {({ i18n }) => (
            <button onClick={() => alert(i18n._(t`You're looking good!`))}>
              <Trans>Show motto of the day</Trans>
            </button>
          )}
        </I18n>
      </p>

      <h2>
        <Trans>Formatting</Trans>
      </h2>

      <h3>
        <Trans>Plurals</Trans>
      </h3>

      <IntegerStepper>
        {count => (
          <Plural
            value={count}
            _0="There're no books"
            one="There's one book"
            other="There're # books"
          />
        )}
      </IntegerStepper>

      <h3>
        <Trans>Dates</Trans>
      </h3>

      <p>
        <Trans>
          Today is <DateFormat value={new Date()} />
        </Trans>
      </p>

      <h3>
        <Trans>Numbers</Trans>
      </h3>

      <p>
        <Trans>
          It costs{" "}
          <NumberFormat
            value={2000}
            format={{ style: "currency", currency: "USD" }}
          />{" "}
          which is <NumberFormat value={0.2} format={{ style: "percent" }} /> of
          our income.
        </Trans>
      </p>
    </div>
  );
}
