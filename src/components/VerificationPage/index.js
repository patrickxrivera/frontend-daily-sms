import React from 'react';
import ReactLoading from 'react-loading';

import {
  FilledBackground,
  InputWrapper,
  Input,
  CountryCodeText,
  Line,
  Subtext,
  ErrorText
} from '../SignUp/styles';
import Button from 'components/Button';

const LOADING_SIZE = 25;

const renderButtonContent = (renderLoadingIndicator) =>
  renderLoadingIndicator ? (
    <ReactLoading type="spinningBubbles" height={LOADING_SIZE} width={LOADING_SIZE} />
  ) : (
    'Verify'
  );

const VerificationPage = ({
  handleSubmit,
  handleInputChange,
  renderLoadingIndicator,
  verificationCode
}) => (
  <FilledBackground>
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <div>
          <CountryCodeText>Enter Your Code</CountryCodeText>
          <Line />
          <Input
            placeholder="Your Verification Code"
            value={verificationCode.value}
            onChange={handleInputChange}
            name={verificationCode.name}
            autoFocus
          />
          <Line />
          <ErrorText>{verificationCode.errorText}</ErrorText>
          <Subtext>This can take a few seconds.</Subtext>
          <Subtext>Please retry if you don't receive the code.</Subtext>
        </div>
        <div>
          <Button onClick={handleSubmit}>{renderButtonContent(renderLoadingIndicator)}</Button>
        </div>
      </InputWrapper>
    </form>
  </FilledBackground>
);

export default VerificationPage;