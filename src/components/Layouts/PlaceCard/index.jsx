import React from "react";
import Mark from "../../Layouts/Mark";
import {getRating, Housing, PROPTYPES} from "../../../const";
import {usePage} from "../../../hooks/usePage";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const PlaceCard = ({offer, handleMouseEnter, handleMouseOut}) => {
  const Page = usePage();

  const {
    is_premium: isPremium,
    preview_image: previewImage,
    price,
    is_favorite: isFavorite,
    rating,
    title,
    type,
  } = offer;

  return (
    <article
      className={`
        ${Page.isFavorites && `favorites__card`}
        ${Page.isMain && `cities__place-card`}
        ${Page.isOffer && `near-places__card`} place-card
      `}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
    >
      {Page.isMain && isPremium && <Mark />}
      <div className={`
        ${Page.isFavorites && `favorites__image-wrapper`}
        ${Page.isMain && `cities__image-wrapper`}
        ${Page.isOffer && `near-places__image-wrapper`} place-card__image-wrapper
      `}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={Page.isFavorites ? 150 : 260}
            height={Page.isFavorites ? 110 : 200}
            alt={Housing[type]}
          />
        </a>
      </div>
      <div
        className={`${
          Page.isFavorites && `favorites__card-info `
        }place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite && `place-card__bookmark-button--active`
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{Housing[type]}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PROPTYPES.OFFER,
  handleMouseEnter: PropTypes.func,
  handleMouseOut: PropTypes.func,
};

export default PlaceCard;